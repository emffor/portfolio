const STORAGE_URL =
  process.env.NEXT_PUBLIC_STORAGE_URL ?? process.env.AWS_ENDPOINT ?? "";
const STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? process.env.AWS_BUCKET ?? "";

/**
 * Constrói a URL pública completa de um asset armazenado no MinIO/S3.
 *
 * @param path Caminho relativo dentro do bucket (ex: "projects/investidor/capa.png")
 * @returns URL pública resolvida
 */
export function storageUrl(path: string): string {
  const normalizedBase = STORAGE_URL.replace(/\/+$/, "");
  const normalizedBucket = STORAGE_BUCKET.replace(/^\/+|\/+$/g, "");
  const normalizedPath = path.replace(/^\/+/, "");

  if (!normalizedBase && !normalizedBucket) {
    return `/${normalizedPath}`;
  }

  if (!normalizedBucket) {
    return `${normalizedBase}/${normalizedPath}`;
  }

  return `${normalizedBase}/${normalizedBucket}/${normalizedPath}`;
}

/**
 * Constrói a URL pública da foto de perfil.
 * Aceita somente o nome do arquivo da foto (ex: "perfil.png").
 *
 * @param photo Nome do arquivo da foto (ex: "perfil.png")
 * @returns URL pública da foto de perfil
 */
export function profilePhotoUrl(photo: string = "perfil.png"): string {
  if (photo.startsWith("http://") || photo.startsWith("https://")) {
    return photo;
  }
  const clean = photo.replace(/^profile\//, "").replace(/^\/+/, "");
  return storageUrl(`profile/${clean}`);
}

/**
 * Constrói a URL pública de uma imagem de projeto.
 * Aceita o slug do projeto e somente o nome da imagem/foto (ex: "capa.png").
 *
 * @param slug Slug do projeto (ex: "rastro-florestal")
 * @param photo Nome do arquivo da imagem (ex: "capa.png")
 * @returns URL pública da imagem do projeto
 */
export function projectImageUrl(slug: string, photo: string): string {
  if (photo.startsWith("http://") || photo.startsWith("https://")) {
    return photo;
  }
  const cleanSlug = slug.replace(/^projects\//, "").replace(/^\/+|\/+$/g, "");
  const cleanPhoto = photo
    .replace(new RegExp(`^projects\/${cleanSlug}\/`), "")
    .replace(/^\/+/, "");
  return storageUrl(`projects/${cleanSlug}/${cleanPhoto}`);
}

/**
 * Service de mídia e armazenamento para centralizar a resolução de URLs de assets.
 */
export const storageService = {
  url: storageUrl,
  profilePhoto: profilePhotoUrl,
  projectImage: projectImageUrl,
};
