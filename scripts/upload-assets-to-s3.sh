#!/usr/bin/env bash
# ==============================================================================
# Script de sincronização de assets estáticos com o MinIO / S3
#
# Estrutura no bucket:
#   portfolio/
#   ├── profile/
#   └── projects/
#       ├── rastro-florestal/
#       ├── consolidacao-arquitetural/
#       ├── investidor/
#       ├── task-markdown/
#       ├── vidora/
#       └── bruna-e-eloan/
#
# Variáveis necessárias (.env ou ambiente):
#   - NEXT_PUBLIC_STORAGE_URL
#   - NEXT_PUBLIC_STORAGE_BUCKET
#   - AWS_ACCESS_KEY_ID
#   - AWS_SECRET_ACCESS_KEY
#
# Uso:
#   pnpm upload:assets
# ==============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Função para carregar variáveis de arquivo sem eval inseguro
load_env_file() {
  local file="$1"
  if [ -f "$file" ]; then
    while IFS= read -r line || [ -n "$line" ]; do
      if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
        continue
      fi
      if [[ "$line" =~ ^[[:space:]]*([A-Za-z_][A-Za-z0-9_]*)=(.*)$ ]]; then
        local key="${BASH_REMATCH[1]}"
        local val="${BASH_REMATCH[2]}"
        val="${val#"${val%%[![:space:]]*}"}"
        val="${val%"${val##*[![:space:]]}"}"
        if [[ "$val" =~ ^\"(.*)\"$ || "$val" =~ ^\'(.*)\'$ ]]; then
          val="${BASH_REMATCH[1]}"
        fi
        if [ -z "${!key:-}" ]; then
          export "$key"="$val"
        fi
      fi
    done < "$file"
  fi
}

load_env_file "${REPO_ROOT}/.env.local"
load_env_file "${REPO_ROOT}/.env"

STORAGE_URL="${NEXT_PUBLIC_STORAGE_URL:-${AWS_ENDPOINT:-}}"
STORAGE_BUCKET="${NEXT_PUBLIC_STORAGE_BUCKET:-${AWS_BUCKET:-}}"

# Validação das variáveis obrigatórias
missing_vars=()
[ -z "${STORAGE_URL:-}" ] && missing_vars+=("NEXT_PUBLIC_STORAGE_URL (ou AWS_ENDPOINT)")
[ -z "${STORAGE_BUCKET:-}" ] && missing_vars+=("NEXT_PUBLIC_STORAGE_BUCKET (ou AWS_BUCKET)")
[ -z "${AWS_ACCESS_KEY_ID:-}" ] && missing_vars+=("AWS_ACCESS_KEY_ID")
[ -z "${AWS_SECRET_ACCESS_KEY:-}" ] && missing_vars+=("AWS_SECRET_ACCESS_KEY")

if [ ${#missing_vars[@]} -gt 0 ]; then
  echo "Erro: As seguintes variáveis de ambiente obrigatórias não estão definidas:" >&2
  for var in "${missing_vars[@]}"; do
    echo "  - $var" >&2
  done
  echo "" >&2
  echo "Configure-as no arquivo .env (ou .env.local) ou exporte-as no terminal antes de executar." >&2
  exit 1
fi

if ! command -v mc &> /dev/null; then
  echo "Erro: o utilitário 'mc' (MinIO Client) não foi encontrado no PATH." >&2
  echo "Instale o MinIO Client antes de executar este script." >&2
  echo "Documentação: https://min.io/docs/minio/linux/reference/minio-mc.html" >&2
  exit 1
fi

# Resolução do diretório de origem
if [ -n "${SOURCE_DIR:-}" ]; then
  ASSETS_SRC="${SOURCE_DIR}"
elif [ -d "${REPO_ROOT}/.assets-migration" ]; then
  ASSETS_SRC="${REPO_ROOT}/.assets-migration"
elif [ -d "${REPO_ROOT}/public/assets" ]; then
  ASSETS_SRC="${REPO_ROOT}/public/assets"
else
  echo "Erro: Diretório de assets não encontrado (esperado em .assets-migration ou public/assets)." >&2
  exit 1
fi

ALIAS_NAME="portfolio-storage"

cleanup() {
  mc alias rm "${ALIAS_NAME}" > /dev/null 2>&1 || true
}
trap cleanup EXIT INT TERM

echo "========================================================"
echo " Início do upload de assets para MinIO / S3"
echo " Endpoint : ${STORAGE_URL}"
echo " Bucket   : ${STORAGE_BUCKET}"
echo " Origem   : ${ASSETS_SRC}"
echo "========================================================"

echo "→ Configurando alias temporário '${ALIAS_NAME}'..."
mc alias set "${ALIAS_NAME}" \
  "${STORAGE_URL}" \
  "${AWS_ACCESS_KEY_ID}" \
  "${AWS_SECRET_ACCESS_KEY}" > /dev/null

echo "→ Verificando / criando bucket '${STORAGE_BUCKET}'..."
mc mb --ignore-existing "${ALIAS_NAME}/${STORAGE_BUCKET}"

echo "→ Aplicando política pública de download no bucket '${STORAGE_BUCKET}'..."
mc anonymous set download "${ALIAS_NAME}/${STORAGE_BUCKET}"

sync_dir() {
  local local_rel="$1"
  local remote_rel="$2"
  local src="${ASSETS_SRC}/${local_rel}"
  local dest="${ALIAS_NAME}/${STORAGE_BUCKET}/${remote_rel}"

  if [ -d "${src}" ]; then
    echo "→ Sincronizando ${local_rel} → ${remote_rel}..."
    mc mirror --overwrite "${src}" "${dest}"
  else
    echo "• Diretório local ${src} não encontrado, pulando..."
  fi
}

# 1. Perfil
sync_dir "perfil" "profile"

# 2. Projetos com normalização para slugs oficiais
sync_dir "rastro-florestal" "projects/rastro-florestal"
sync_dir "consolidacao-readi" "projects/consolidacao-arquitetural"
sync_dir "investidor" "projects/investidor"
sync_dir "taskmarkdown" "projects/task-markdown"
sync_dir "vidora" "projects/vidora"
sync_dir "brunaeeloan" "projects/bruna-e-eloan"

echo "========================================================"
echo " Upload concluído com sucesso!"
echo " Estrutura no bucket '${STORAGE_BUCKET}':"
mc ls "${ALIAS_NAME}/${STORAGE_BUCKET}/" || true
echo "========================================================"
