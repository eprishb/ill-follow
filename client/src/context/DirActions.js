export const DirAction = (value) => {
  if (value) {
    document.body.parentElement.setAttribute("dir", "rtl");
  } else {
    document.body.parentElement.setAttribute("dir", "ltr");
  }

  return { type: "DIRMODE", value };
};
