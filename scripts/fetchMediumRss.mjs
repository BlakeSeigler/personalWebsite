import fs from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

const PROJECT_ROOT = process.cwd();
const OUT_FILE = path.join(PROJECT_ROOT, "src", "data", "mediumPosts.json");

const DEFAULT_RSS_URL = "https://medium.com/feed/YOUR_PUBLICATION_SLUG";
const rssUrl = process.env.MEDIUM_RSS_URL || DEFAULT_RSS_URL;

function stripHtml(html = "") {
  return String(html)
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function safeArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

function buildFallbackPosts() {
  return [
    {
      id: "sample-1",
      title: "A minimalist mindset for building software",
      url: "https://medium.com/",
      publishedAt: new Date().toISOString(),
      excerpt:
        "A short example excerpt. When you connect your Medium RSS, this will populate automatically at build time."
    },
    {
      id: "sample-2",
      title: "Notes on systems, tradeoffs, and clarity",
      url: "https://medium.com/",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      excerpt:
        "Another example card showing title + description + date. Clicking will take you to Medium."
    }
  ];
}

async function ensureOutDir() {
  await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
}

async function writeJson(data) {
  await ensureOutDir();
  await fs.writeFile(OUT_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
}

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status} ${res.statusText}`);
  return await res.text();
}

async function main() {
  // If the user hasn't configured the RSS URL yet, write a small sample so the UI still looks good.
  if (!rssUrl || rssUrl.includes("YOUR_PUBLICATION_SLUG")) {
    console.warn(
      `[medium] MEDIUM_RSS_URL not set (or still placeholder). Writing sample posts to ${path.relative(
        PROJECT_ROOT,
        OUT_FILE
      )}.`
    );
    await writeJson(buildFallbackPosts());
    return;
  }

  try {
    const xml = await fetchText(rssUrl);

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      removeNSPrefix: true
    });

    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    const items = safeArray(channel?.item);

    const posts = items
      .map((item) => {
        const url = item?.link ? String(item.link).trim() : "";
        const title = item?.title ? stripHtml(item.title) : "Untitled";
        const guid = item?.guid?.["#text"] || item?.guid || url || title;
        const publishedAt = item?.pubDate ? new Date(item.pubDate).toISOString() : null;

        // Medium tends to include HTML in description / content:encoded.
        const rawExcerpt =
          item?.description ||
          item?.content ||
          item?.["content:encoded"] ||
          item?.encoded ||
          "";
        const excerpt = stripHtml(rawExcerpt).slice(0, 220);

        return {
          id: String(guid),
          title,
          url,
          publishedAt,
          excerpt
        };
      })
      .filter((p) => p.url && p.title)
      .sort((a, b) => {
        const ad = a.publishedAt ? Date.parse(a.publishedAt) : 0;
        const bd = b.publishedAt ? Date.parse(b.publishedAt) : 0;
        return bd - ad;
      })
      .slice(0, 12);

    await writeJson(posts.length ? posts : buildFallbackPosts());
    console.log(
      `[medium] Wrote ${posts.length} posts to ${path.relative(PROJECT_ROOT, OUT_FILE)} from ${rssUrl}`
    );
  } catch (err) {
    console.warn(`[medium] RSS fetch/parse failed. Writing sample posts instead.`);
    console.warn(err?.stack || String(err));
    await writeJson(buildFallbackPosts());
  }
}

await main();


