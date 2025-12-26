import React, { useMemo } from "react";
import posts from "../data/mediumPosts.json";
import "./Blog.css";

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function Blog() {
  const items = useMemo(() => (Array.isArray(posts) ? posts : []), []);

  return (
    <section className="section">
      <div className="container">
        <div className="pageHeader">
          <div className="eyebrow reveal">
            <span className="eyebrowDot" aria-hidden="true" />
            Writing
          </div>
          <h1 className="pageTitle reveal delay1">Blog</h1>
          <p className="pageSub reveal delay2">
            Posts pulled from Medium at build time. Click a card to read the full article.
          </p>
        </div>

        <div className="blogList">
          {items.map((p) => (
            <a
              key={p.id}
              className="blogCard card"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="blogTop">
                <div className="blogTitle">{p.title}</div>
                <div className="blogDate">{formatDate(p.publishedAt)}</div>
              </div>
              <div className="blogExcerpt">{p.excerpt}</div>
            </a>
          ))}
        </div>

        {!items.length ? (
          <div className="blogEmpty card">
            No posts yet. Once you set <code>MEDIUM_RSS_URL</code>, this page will populate at build
            time.
          </div>
        ) : null}
      </div>
    </section>
  );
}


