module.exports = function (eleventyConfig) {
  const inputDir = `src`;
  const outputDir = `_site`;
  const copyFolders = [
    "assets",
    "css",
    "fonts",
    "images",
    "js",
    "page-css",
    "images-services",
  ];

  // Copy assets
  copyFolders.forEach((folder) => {
    eleventyConfig.addPassthroughCopy(`${inputDir}/${folder}`);
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
