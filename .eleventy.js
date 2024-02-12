const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/themes/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('posts', collection => {
    return collection
    .getFilteredByGlob('./src/posts/*.njk');
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};