export const ThemeAction = (value) => {
  if (value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return { type: "DARKMODE", value };
};
