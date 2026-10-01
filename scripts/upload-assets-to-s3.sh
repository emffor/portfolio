#!/usr/bin/env bash
# ==============================================================================
# Script de sincronização de assets estáticos com o MinIO / S3
#
# Estrutura esperada no bucket:
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
# Requisitos:
#   - MinIO Client (mc) instalado e com alias configurado previamente.
#   Exemplo de configuração prévia do alias mc:
#     mc alias set meu-minio "${NEXT_PUBLIC_STORAGE_URL}" <ACCESS_KEY> <SECRET_KEY>
#
# Uso:
#   MINIO_ALIAS=meu-minio ./scripts/upload-assets-to-s3.sh
# ==============================================================================

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Carrega variáveis do arquivo .env caso existam
if [ -f "${REPO_ROOT}/.env" ]; then
  # shellcheck disable=SC2046
  export $(grep -E '^NEXT_PUBLIC_STORAGE_' "${REPO_ROOT}/.env" | xargs) 2>/dev/null || true
fi

MINIO_ALIAS="${MINIO_ALIAS:-local}"
STORAGE_BUCKET="${STORAGE_BUCKET:-${NEXT_PUBLIC_STORAGE_BUCKET:-}}"

if [ -z "${STORAGE_BUCKET}" ]; then
  echo "Erro: Defina a variável NEXT_PUBLIC_STORAGE_BUCKET ou STORAGE_BUCKET." >&2
  exit 1
fi
if [ -n "${SOURCE_DIR:-}" ]; then
  SOURCE_DIR="${SOURCE_DIR}"
elif [ -d "${REPO_ROOT}/.assets-migration" ]; then
  SOURCE_DIR="${REPO_ROOT}/.assets-migration"
else
  SOURCE_DIR="${REPO_ROOT}/public/assets"
fi

echo "========================================================"
echo " Início do upload de assets para MinIO / S3"
echo " Alias MinIO : ${MINIO_ALIAS}"
echo " Bucket      : ${STORAGE_BUCKET}"
echo " Origem      : ${SOURCE_DIR}"
echo "========================================================"

if ! command -v mc &> /dev/null; then
  echo "Erro: o utilitário 'mc' (MinIO Client) não foi encontrado no PATH." >&2
  echo "Instale o MinIO Client ou configure-o antes de executar este script." >&2
  echo "Documentação: https://min.io/docs/minio/linux/reference/minio-mc.html" >&2
  exit 1
fi

if [ ! -d "${SOURCE_DIR}" ]; then
  echo "Aviso: Diretório de assets locais não encontrado em ${SOURCE_DIR}."
  echo "Caso os arquivos já tenham sido migrados e removidos de public/assets, utilize um backup."
  exit 0
fi

# Cria o bucket se não existir
echo "→ Verificando / criando bucket '${STORAGE_BUCKET}'..."
mc mb --ignore-existing "${MINIO_ALIAS}/${STORAGE_BUCKET}"

# Define política pública de leitura (download) para o bucket de assets públicos
echo "→ Aplicando política pública de leitura em '${MINIO_ALIAS}/${STORAGE_BUCKET}'..."
mc anonymous set download "${MINIO_ALIAS}/${STORAGE_BUCKET}" || true

# Função auxiliar para espelhar diretórios locais para caminhos específicos no bucket
sync_dir() {
  local local_rel="$1"
  local remote_rel="$2"
  local src="${SOURCE_DIR}/${local_rel}"
  local dest="${MINIO_ALIAS}/${STORAGE_BUCKET}/${remote_rel}"

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
echo " Estrutura disponível no bucket '${STORAGE_BUCKET}':"
echo " mc ls ${MINIO_ALIAS}/${STORAGE_BUCKET}/"
echo "========================================================"
