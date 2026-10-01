const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? "";

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

  return `${normalizedBase}/${normalizedBucket}/${normalizedPath}`;
}
