export const ppLetterCalculator = (fullname) => {
  if (!fullname) return "";
  const words = fullname.split(" ");
  const initials = [];
  for (const word of words) {
    if (word) {
      initials.push(word[0].toUpperCase()); // Convert to uppercase to ensure consistency
    }
  }
  const result = initials.join("");
  return result;
};
