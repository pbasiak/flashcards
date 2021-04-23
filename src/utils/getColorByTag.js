export const getColorByTag = (tagName) => {
  let color;

  switch (tagName) {
    case "javascript":
      color = "yellow";
      break;
    default:
      color = "#f3f3f3";
  }

  return color;
};
