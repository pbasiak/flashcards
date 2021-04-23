export const getInitials = username => username
  .split("")
  .map((letter, index) => {
    if (index < 2) {
      return letter;
    }
    return null;
  })
  .filter((item) => item != null)
  .join("")
  .toUpperCase();
