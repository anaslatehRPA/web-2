module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Images");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("products/*.md");
  });
  return {
    dir: { input: ".", includes: "_includes" }
  };
}