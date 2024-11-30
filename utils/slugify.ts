export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
export const unSlugify = (text: string) => {
  return text
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
 };