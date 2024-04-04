export function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
}
