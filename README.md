# Aleshinloye Olamilekan Portfolio

Modern portfolio built with Next.js App Router and static export for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Update Portfolio Content

Most profile content lives in `data/portfolio.js`.

Update that file when you need to change:

- Hero copy
- Metrics
- Experience
- Projects
- Skills
- Contact links

## Deployment

This repo includes a GitHub Pages workflow at `.github/workflows/deploy.yml`.

Every push to `main` runs `npm install`, builds the Next.js app, exports static files to `out/`, and deploys the result to GitHub Pages.
