export const convertHtmlVariable = (params) => {
  return params
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ä", "a")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("õ", "o");
}