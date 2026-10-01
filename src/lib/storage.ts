const STORAGE_URL =
  process.env.NEXT_PUBLIC_STORAGE_URL ?? process.env.AWS_ENDPOINT ?? "";
const STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? process.env.AWS_BUCKET ?? "";

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

export function profilePhotoUrl(photo: string = "perfil.png"): string {
  if (photo.startsWith("http://") || photo.startsWith("https://")) {
    return photo;
  }
  const clean = photo.replace(/^profile\//, "").replace(/^\/+/, "");
  return storageUrl(`profile/${clean}`);
}

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

export function documentUrl(doc: string = "EloanFerreira.pdf"): string {
  if (doc.startsWith("http://") || doc.startsWith("https://")) {
    return doc;
  }
  const clean = doc.replace(/^documentos\//, "").replace(/^\/+/, "");
  return storageUrl(`documentos/${clean}`);
}

export const storageService = {
  url: storageUrl,
  profilePhoto: profilePhotoUrl,
  projectImage: projectImageUrl,
  document: documentUrl,
};
