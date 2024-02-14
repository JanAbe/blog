const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/themes/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');
  eleventyConfig.addPassthroughCopy({'./node_modules/typewriter-effect/dist/core.js': '/js/typewriter-effect.js'});
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection('posts', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.njk')].reverse(); 
  });

  eleventyConfig.addFilter("dutchDateFormat", (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_SHORT, { locale: "nl" });
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};