const { execFileSync } = require("child_process");
const path = require("path");

// https://www.sitemaps.org/protocol.html
const SITEMAP_MAX_BYTES = 50 * 1024 * 1024;
const SITEMAP_MAX_URLS = 50000;

// Pages whose HTML is a list of posts. Their lastmod follows that list.
const LISTING_PAGES = {
  "/": "blog",
  "/blog.html": "blog",
  "/big-tweets.html": "bigtweet",
};

function loadGitDates(root) {
  const dates = new Map();
  let output = "";
  try {
    output = execFileSync(
      "git",
      ["log", "--pretty=format:%cI", "--name-only"],
      { cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 },
    );
  } catch {
    return dates;
  }

  let current = "";
  for (const line of output.split("\n")) {
    const text = line.trim();
    if (!text) continue;
    if (/^\d{4}-\d{2}-\d{2}T/.test(text)) {
      current = text.slice(0, 10);
      continue;
    }
    if (current && !dates.has(text)) dates.set(text, current);
  }
  return dates;
}

function gitPath(root, inputPath) {
  return path.relative(root, path.resolve(root, inputPath)).split(path.sep).join("/");
}

function dateOnly(value) {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return "";
    return value.toISOString().slice(0, 10);
  }
  const match = String(value || "").trim().match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "";
}

function later(a, b) {
  if (!a) return b || "";
  if (!b) return a;
  return a > b ? a : b;
}

function hasTag(item, tag) {
  const tags = item.data && item.data.tags;
  if (!tags) return false;
  return Array.isArray(tags) ? tags.includes(tag) : tags === tag;
}

function isIndexable(item) {
  if (!item || typeof item.url !== "string" || !item.url.startsWith("/")) return false;
  const ext = item.page && item.page.outputFileExtension;
  if (ext && ext !== "html") return false;
  const data = item.data || {};
  if (data.sitemap === false || data.draft === true || data.published === false) return false;
  if (typeof data.robots === "string" && /noindex/i.test(data.robots)) return false;
  return true;
}

function buildSitemapEntries(items, root) {
  const gitDates = loadGitDates(root);
  const indexable = items.filter(isIndexable);
  const lastmodByUrl = new Map();

  for (const item of indexable) {
    const fromGit = dateOnly(gitDates.get(gitPath(root, item.inputPath)));
    const lastmod = fromGit || dateOnly(item.date);
    lastmodByUrl.set(item.url, lastmod);
  }

  for (const [url, tag] of Object.entries(LISTING_PAGES)) {
    if (!lastmodByUrl.has(url)) continue;
    let lastmod = lastmodByUrl.get(url);
    for (const item of indexable) {
      if (!hasTag(item, tag)) continue;
      lastmod = later(lastmod, lastmodByUrl.get(item.url));
    }
    lastmodByUrl.set(url, lastmod);
  }

  const entries = [];
  const seen = new Set();
  for (const item of indexable) {
    if (seen.has(item.url)) continue;
    seen.add(item.url);
    const lastmod = lastmodByUrl.get(item.url);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
      throw new Error(`Missing lastmod for ${item.url}`);
    }
    entries.push({ loc: item.url, lastmod });
  }

  entries.sort((a, b) => a.loc.localeCompare(b.loc));

  if (entries.length > SITEMAP_MAX_URLS) {
    throw new Error(
      `Sitemap has ${entries.length} URLs, over the ${SITEMAP_MAX_URLS} URL limit`,
    );
  }

  return entries;
}

module.exports = {
  SITEMAP_MAX_BYTES,
  SITEMAP_MAX_URLS,
  buildSitemapEntries,
};
