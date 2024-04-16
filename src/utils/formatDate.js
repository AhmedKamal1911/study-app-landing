function formatDate(date, options) {
  const DATE_FORMATTER = new Intl.DateTimeFormat(undefined, options);
  const dateObj = new Date(date);
  return DATE_FORMATTER.format(dateObj);
}

export default formatDate;
