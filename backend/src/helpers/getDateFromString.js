import { validateDateString } from "./validateDateString.js";

export default function getDateFromString(dateString) {
  validateDateString(dateString);
  return new Date(dateString);
}
