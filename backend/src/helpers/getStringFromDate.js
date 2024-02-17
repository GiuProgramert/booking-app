export default function getStringFromDate(date) {
  return date.toISOString().split("T")[0];
}
