# Minimalist Personal Website

This is a minimalist black/white React site with:
- Home (subtle spotlight + reveal animations)
- Projects (grid of cards + modal details)
- About (photo + placeholder text)
- Blog (Medium posts pulled at build time)

## Local development

```bash
npm install
npm start
```

## Medium blog feed (build-time)

Blog posts are generated into `src/data/mediumPosts.json` during `prestart` and `prebuild`.

Set this environment variable in Vercel (Project → Settings → Environment Variables):
- `MEDIUM_RSS_URL`: your Medium publication RSS feed, for example:
  - `https://medium.com/feed/YOUR_PUBLICATION_SLUG`

If `MEDIUM_RSS_URL` is not set, the site uses sample placeholder posts so builds still succeed.

## Vercel

`vercel.json` is included to support SPA routing (deep links like `/projects` won’t 404).


