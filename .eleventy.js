module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy('./src/_headers');
  
    eleventyConfig.addCollection('blog', (collection) => {
    return collection.getFilteredByGlob('src/blog/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      data: '_data',
    },
    templateFormats: ['html', 'md', 'liquid', 'css'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passThroughFileCopy: true,
  };
};
