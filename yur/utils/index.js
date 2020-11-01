/**
 * Get category name
 * @param menuCategories
 * @param category
 * @returns {string}
 */
export function getCategoryText(menuCategories, category) {
  let res = "";
  if (menuCategories.length && category) {
    menuCategories.forEach(menuCategory => {
      const { text, link } = menuCategory;
      if (link === category) {
        res = text;
      }
    });
  }
  return res;
}

export function isProd() {
  return process.env.NODE_ENV === "production" && typeof window !== "undefined";
}

export function isBuild() {
  return (
    process.env.NODE_ENV === "production" && typeof navigator === "undefined"
  );
}
