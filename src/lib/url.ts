const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** The site has two versions: the original at the root and a warm version under /warm/. */
export type Variant = 'original' | 'warm';

export function variantOf(current: URL): Variant {
  return current.pathname.startsWith(`${base}/warm/`) ? 'warm' : 'original';
}

/**
 * Prefixes a site-relative path with the configured base, e.g. 'services/' -> '/james-stokes-carpentry/services/'.
 * Pass the current page URL to keep links inside the same version (adds 'warm/' on warm pages).
 */
export function url(path = '', current?: URL): string {
  const prefix = current && variantOf(current) === 'warm' ? 'warm/' : '';
  return `${base}/${prefix}${path.replace(/^\//, '')}`;
}

/** The same page in the other version, for the footer switch. */
export function otherVersion(current: URL): string {
  const rest = current.pathname.slice(base.length + 1).replace(/^warm\//, '');
  return variantOf(current) === 'warm' ? `${base}/${rest}` : `${base}/warm/${rest}`;
}
