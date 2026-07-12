module.exports = {
  // Mirror Jekyll's `permalink: none` for posts: /<slug>.html, with the
  // YYYY-MM-DD- date prefix stripped from the filename (Eleventy's fileSlug).
  permalink: (data) => `/${data.page.fileSlug}.html`,
};
