export default validateDateString = (dateString) => {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!pattern.test(dateString)) throw Error("not valid date");
};
