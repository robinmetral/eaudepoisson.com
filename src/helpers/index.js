export const formatDate = (date) => {
  // convert to Date instance if it's a string
  // will return NaN if it fails
  if (date instanceof Date === false) date = new Date(date);
  return date.toLocaleDateString("fr-CH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
