export default function getDaysBetweenDates(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffDays = Math.round(Math.abs((start - end) / oneDay));
  return diffDays;
}
