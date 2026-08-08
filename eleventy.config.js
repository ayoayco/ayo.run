export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/pico.min.css");
  eleventyConfig.addPassthroughCopy("src/logo.png");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
