const fs = require("fs");
const path = require("path");

// A status URL alone in a paragraph is replaced with a static embed.
// The tweet is fetched once from fxtwitter and stored under embeds/tweets
// and img/tweets, so later builds do not depend on the API.

const TWEET_URL =
  /^https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/(?:([A-Za-z0-9_]{1,15})\/status\/(\d+)|i\/web\/status\/(\d+))(?:[/?#]\S*)?$/i;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function cacheDir(root) {
  return path.join(root, "embeds", "tweets");
}

function imageDir(root) {
  return path.join(root, "img", "tweets");
}

function parseTweetUrl(value) {
  const text = String(value).trim().replace(/^<([^>]+)>$/, "$1");
  const match = text.match(TWEET_URL);
  if (!match) return null;
  return {
    handle: match[1] || null,
    id: match[2] || match[3],
  };
}

function findEmbedUrls(markdown) {
  const body = markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "")
    .replace(/```[\s\S]*?```/g, "");
  const found = [];
  for (const block of body.split(/\n\s*\n/)) {
    const tweet = parseTweetUrl(block);
    if (tweet) found.push(tweet);
  }
  return found;
}

function readCache(root, id) {
  const file = path.join(cacheDir(root), `${id}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeCache(root, tweet) {
  const dir = cacheDir(root);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${tweet.id}.json`), JSON.stringify(tweet, null, 2) + "\n");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatText(text) {
  const re = /(https?:\/\/[^\s]+|@[A-Za-z0-9_]{1,15})/g;
  let html = "";
  let last = 0;
  for (const match of String(text).matchAll(re)) {
    html += escapeHtml(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("@")) {
      const handle = token.slice(1);
      html += `<a href="https://x.com/${handle}">@${escapeHtml(handle)}</a>`;
    } else {
      const href = token.replace(/[),.]+$/, "");
      const trail = token.slice(href.length);
      html += `<a href="${escapeHtml(href)}">${escapeHtml(href)}</a>${escapeHtml(trail)}`;
    }
    last = match.index + token.length;
  }
  html += escapeHtml(text.slice(last));
  return html.replace(/\n/g, "<br>\n");
}

function formatDate(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function extensionFor(contentType, url) {
  const type = String(contentType || "");
  if (type.includes("png") || /\.png(\?|$)/i.test(url)) return "png";
  if (type.includes("webp") || /\.webp(\?|$)/i.test(url)) return "webp";
  if (type.includes("gif") || /\.gif(\?|$)/i.test(url)) return "gif";
  return "jpg";
}

async function downloadImage(url, destWithoutExt) {
  const response = await fetch(url, {
    headers: { "User-Agent": "staltz.com" },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${url}`);
  }
  const ext = extensionFor(response.headers.get("content-type"), url);
  const dest = `${destWithoutExt}.${ext}`;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await response.arrayBuffer()));
  return dest;
}

function sitePath(root, file) {
  return "/" + path.relative(root, file).split(path.sep).join("/");
}

async function fetchTweet(root, { id, handle }) {
  const cached = readCache(root, id);
  if (cached) return cached;

  const endpoint = handle
    ? `https://api.fxtwitter.com/${handle}/status/${id}`
    : `https://api.fxtwitter.com/status/${id}`;
  const response = await fetch(endpoint, {
    headers: { Accept: "application/json", "User-Agent": "staltz.com" },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) {
    throw new Error(`Tweet ${id} returned ${response.status}`);
  }
  const payload = await response.json();
  const source = payload && payload.tweet;
  if (!source || !source.text) {
    throw new Error(`Tweet ${id} had no text`);
  }

  const author = source.author || {};
  const tweet = {
    id: String(source.id || id),
    url: source.url || `https://x.com/${author.screen_name || handle}/status/${id}`,
    text: source.text,
    name: author.name || author.screen_name || "",
    handle: author.screen_name || handle || "",
    authorUrl: author.url || (author.screen_name ? `https://x.com/${author.screen_name}` : ""),
    createdAt: source.created_at ? new Date(source.created_at).toISOString() : "",
    avatar: null,
    photos: [],
    quote: null,
  };

  if (source.quote && source.quote.text) {
    const quotedAuthor = source.quote.author || {};
    tweet.quote = {
      text: source.quote.text,
      name: quotedAuthor.name || quotedAuthor.screen_name || "",
      handle: quotedAuthor.screen_name || "",
      url: source.quote.url || "",
    };
  }

  if (author.avatar_url) {
    try {
      const file = await downloadImage(author.avatar_url, path.join(imageDir(root), id));
      tweet.avatar = sitePath(root, file);
    } catch (error) {
      console.warn(`[tweet-embed] avatar for ${id}: ${error.message}`);
    }
  }

  const photos = source.media && Array.isArray(source.media.photos) ? source.media.photos : [];
  for (let index = 0; index < photos.length; index++) {
    const photo = photos[index];
    if (!photo || !photo.url) continue;
    try {
      const file = await downloadImage(photo.url, path.join(imageDir(root), `${id}-${index + 1}`));
      tweet.photos.push(sitePath(root, file));
    } catch (error) {
      console.warn(`[tweet-embed] photo for ${id}: ${error.message}`);
    }
  }

  writeCache(root, tweet);
  console.log(`[tweet-embed] saved ${tweet.handle}/${tweet.id}`);
  return tweet;
}

function collectPosts(dir, files) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectPosts(full, files);
    else if (entry.name.endsWith(".md")) files.push(full);
  }
}

async function prefetchTweetEmbeds(root) {
  const files = [];
  collectPosts(path.join(root, "_posts"), files);
  const pending = new Map();
  for (const file of files) {
    const markdown = fs.readFileSync(file, "utf8");
    for (const tweet of findEmbedUrls(markdown)) {
      pending.set(tweet.id, tweet);
    }
  }
  await Promise.all(
    [...pending.values()].map(async (tweet) => {
      try {
        await fetchTweet(root, tweet);
      } catch (error) {
        console.warn(`[tweet-embed] ${tweet.id}: ${error.message}`);
      }
    })
  );
}

const X_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

function renderTweet(tweet) {
  const when = formatDate(tweet.createdAt);
  const avatar = tweet.avatar
    ? `<img class="tweet-embed__avatar" src="${escapeHtml(tweet.avatar)}" alt="" width="40" height="40">`
    : "";
  const photos = tweet.photos.length
    ? `<div class="tweet-embed__photos">${tweet.photos
        .map(
          (src) =>
            `<img src="${escapeHtml(src)}" alt="Photo attached to the post by @${escapeHtml(tweet.handle)}">`
        )
        .join("")}</div>`
    : "";
  const quote =
    tweet.quote && tweet.quote.text
      ? `<div class="tweet-embed__quote">
      <p class="tweet-embed__quote-by">${
        tweet.quote.url
          ? `<a href="${escapeHtml(tweet.quote.url)}">${escapeHtml(tweet.quote.name)}</a>`
          : escapeHtml(tweet.quote.name)
      }${
          tweet.quote.handle
            ? ` <span class="tweet-embed__handle">@${escapeHtml(tweet.quote.handle)}</span>`
            : ""
        }</p>
      <p>${formatText(tweet.quote.text)}</p>
    </div>`
      : "";

  return `<figure class="tweet-embed">
  <figcaption class="tweet-embed__by">
    ${avatar}
    <span class="tweet-embed__who">
      <a class="tweet-embed__name" href="${escapeHtml(tweet.authorUrl)}">${escapeHtml(tweet.name)}</a>
      <a class="tweet-embed__handle" href="${escapeHtml(tweet.authorUrl)}">@${escapeHtml(tweet.handle)}</a>
    </span>
    <a class="tweet-embed__permalink" href="${escapeHtml(tweet.url)}">
      <time datetime="${escapeHtml(tweet.createdAt)}">${escapeHtml(when)}</time>
      ${X_ICON}
    </a>
  </figcaption>
  <blockquote cite="${escapeHtml(tweet.url)}">
    <p>${formatText(tweet.text)}</p>
  </blockquote>
  ${photos}
  ${quote}
</figure>
`;
}

function tweetEmbedPlugin(md, options) {
  const root = options.root;
  md.core.ruler.push("tweet_embed", (state) => {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      const open = tokens[i];
      if (open.type !== "paragraph_open" || open.level !== 0) continue;
      const inline = tokens[i + 1];
      const close = tokens[i + 2];
      if (!inline || inline.type !== "inline" || !close || close.type !== "paragraph_close") continue;
      const parsed = parseTweetUrl(inline.content);
      if (!parsed) continue;
      const tweet = readCache(root, parsed.id);
      if (!tweet) continue;
      const html = new state.Token("html_block", "", 0);
      html.content = renderTweet(tweet);
      tokens.splice(i, 3, html);
    }
  });
}

module.exports = {
  prefetchTweetEmbeds,
  tweetEmbedPlugin,
};
