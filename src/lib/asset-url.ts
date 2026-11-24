const PUBLIC_ASSET_ORIGIN = "https://iapa-grow-together.lovable.app";

/**
 * Lovable asset pointers contain root-relative paths. Absolute public URLs keep
 * those assets working when the source code is downloaded and hosted elsewhere.
 */
export function assetUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `${PUBLIC_ASSET_ORIGIN}${url.startsWith("/") ? url : `/${url}`}`;
}
