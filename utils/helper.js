export const GenerateUrlSlug = (title) => {
  return title.replace(/\s+/g, "-").toLowerCase();
};
