const fs = require("fs");
const path = require("path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { prefetchTweetEmbeds, tweetEmbedPlugin } = require("./lib/tweet-embed");
const { buildSitemapEntries, SITEMAP_MAX_BYTES } = require("./lib/sitemap");
const site = require("./_data/site.json");
const {
  dateToRfc3339,
  getNewestCollectionItemDate,
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
} = require("@11ty/eleventy-plugin-rss");

// strftime-like helpers to mimic Jekyll's Liquid date filters
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function asDate(value) {
  return value instanceof Date ? value : new Date(value);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // A status URL alone in a paragraph becomes a static tweet embed.
  eleventyConfig.on("eleventy.before", () => prefetchTweetEmbeds(__dirname));
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(tweetEmbedPlugin, { root: __dirname });
  });
  eleventyConfig.watchIgnores.add("embeds/tweets/**");

  // Atom feed helpers (the RSS plugin no longer auto-registers these as filters)
  eleventyConfig.addFilter("dateToRfc3339", dateToRfc3339);
  eleventyConfig.addFilter("getNewestCollectionItemDate", getNewestCollectionItemDate);
  eleventyConfig.addFilter("absoluteUrl", absoluteUrl);
  eleventyConfig.addAsyncFilter("htmlToAbsoluteUrls", convertHtmlToAbsoluteUrls);
  eleventyConfig.addFilter("xmlEscape", (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
  );

  eleventyConfig.addCollection("sitemapEntries", (collectionApi) =>
    buildSitemapEntries(collectionApi.getAll(), __dirname).map((entry) => ({
      loc: absoluteUrl(entry.loc, site.url),
      lastmod: entry.lastmod,
    })),
  );

  eleventyConfig.on("eleventy.after", ({ dir }) => {
    const sitemapPath = path.join(dir.output, "sitemap.xml");
    if (!fs.existsSync(sitemapPath)) return;
    const size = fs.statSync(sitemapPath).size;
    if (size > SITEMAP_MAX_BYTES) {
      throw new Error(
        `sitemap.xml is ${size} bytes, over the 50MB sitemap protocol limit`,
      );
    }
  });

  // Static assets copied verbatim into _site
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  // Standalone static sub-sites (old talks/demos) served under staltz.com/<dir>/.
  // Copy them verbatim and keep Eleventy from trying to render files inside them.
  const staticDirs = [
    "beaker-frontend-dev-dream-browser",
    "cycleconf17",
    "djangoconfi-mongoengine",
    "rxjstrainingcph",
  ];
  for (const dir of staticDirs) {
    eleventyConfig.addPassthroughCopy(dir);
    eleventyConfig.ignores.add(dir);
  }

  // Don't treat repo docs/scripts as content templates
  eleventyConfig.ignores.add("readme.md");

  // Jekyll `date_to_string` -> "20 Jul 2023"
  eleventyConfig.addFilter("dateToString", (value) => {
    const d = asDate(value);
    return `${d.getUTCDate()} ${MONTHS_SHORT[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });

  // Jekyll `date: "%Y-%B"` -> "2023-July"
  eleventyConfig.addFilter("yearMonth", (value) => {
    const d = asDate(value);
    return `${d.getUTCFullYear()}-${MONTHS[d.getUTCMonth()]}`;
  });

  // Jekyll `date: "%Y"` -> "2023"
  eleventyConfig.addFilter("year", (value) => {
    return String(asDate(value).getUTCFullYear());
  });

  // All blog + big-tweet posts, newest first (for the Atom feed)
  eleventyConfig.addCollection("allposts", (collectionApi) =>
    collectionApi.getFilteredByGlob("./_posts/*.md").reverse()
  );

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    // Posts and pages are plain content; only layouts use Liquid templating.
    // Disabling Liquid inside Markdown avoids clashes with `{{`/`{%` in code samples.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "liquid",
    templateFormats: ["md", "html", "liquid"],
  };
};
