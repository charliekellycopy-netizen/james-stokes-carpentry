/** Prefixes a site-relative path with the configured base, e.g. 'services/' -> '/james-stoke-carpentry/services/'. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
