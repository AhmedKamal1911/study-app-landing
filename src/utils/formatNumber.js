function formatNumber(numberTobeFormatted, options) {
  const NUMBER_FORMATTER = new Intl.NumberFormat(undefined, options);
  return NUMBER_FORMATTER.format(numberTobeFormatted);
}
export default formatNumber;
