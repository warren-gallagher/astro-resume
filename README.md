# astro-resume

Personal résumé, built with [Astro](https://astro.build) as a fully static site and hosted on
GitHub Pages at <https://resume.gallaghers.ca>. It replaces the Angular version
(`angular-resume`) with the same content, layout and URLs.

## Editing content

All content is data; no code changes are needed to update the résumé.

| What | Where |
| --- | --- |
| Contact details, site config (copyright, URLs) | `src/data/site.json` |
| Profile text (markdown) | `src/content/profile.md` |
| One job per file (markdown body) | `src/content/experience/*.md` |
| One technology category per file | `src/content/technologies/*.md` |

Experience and technology entries are sorted by the `order` field in their front matter. Their
fields are validated at build time (`src/content.config.ts`, `src/data/site.ts`), so a malformed
entry fails the build instead of producing a broken page.

## Commands

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # type-check, then build static site to dist/
npm run preview   # serve dist/ locally
```

## Pages

`/contact`, `/profile`, `/experience`, `/technologies`, `/print` (opens the print dialog), `/about`.
`/` forwards to `/contact`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
One-time setup:

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. **Custom domain:** `resume.gallaghers.ca` (also kept in `public/CNAME`), then enable **Enforce HTTPS**.
3. DNS: `resume` `CNAME` → `warren-gallagher.github.io`.

## Mastodon verification

Every page has `<link rel="me" href="https://cosocial.ca/@WarrenGallagher">` in its static HTML, and
the contact page has a visible `rel="me"` link. Set the website field on the cosocial.ca profile to
`https://resume.gallaghers.ca`. Mastodon does not run JavaScript or follow meta-refresh redirects,
which is why `/` is a real page carrying the link rather than a redirect.
