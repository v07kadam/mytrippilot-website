# MyTripPilot Website

Official single-page website for **MyTripPilot**, an India-focused travel expense management app.

Built with React, Vite and plain CSS. Hosted on GitHub Pages at `https://mytrippilot.in`.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
```

Requires Node.js 20.19+ or 22.12+.

## Project layout

```
public/CNAME                   Custom domain (copied to dist/ on build)
public/favicon.svg             Site icon
src/content.js                 Copy, nav links, feature list, footer links, download URL placeholder
src/components/                Header, Hero, Introduction, Features, Footer
.github/workflows/deploy.yml   Build and deploy to GitHub Pages on push to main
```

Update `DOWNLOAD_APP_URL` and the placeholder `#` links in `src/content.js` once the app store / APK links and legal pages exist.

## Deployment

Deploys run automatically from `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

### One-time GitHub setup

1. Repository **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
2. **Settings → Pages → Custom domain**: enter `mytrippilot.in` and save.
3. After DNS checks pass, tick **Enforce HTTPS**.

### DNS (GoDaddy)

Add these records in GoDaddy **DNS → Records**. Do not remove existing MX, TXT (SPF/DKIM/DMARC) or other email-related records.

| Type  | Name | Value              | TTL   |
|-------|------|--------------------|-------|
| A     | @    | 185.199.108.153    | 600 s |
| A     | @    | 185.199.109.153    | 600 s |
| A     | @    | 185.199.110.153    | 600 s |
| A     | @    | 185.199.111.153    | 600 s |
| CNAME | www  | v07kadam.github.io | 600 s |

Only one set of apex `A` records should exist for `@`. If an existing `@` A or AAAA record points elsewhere (for example GoDaddy parking), replace it.
DNS propagation can take up to 24 hours. HTTPS certificate issuance follows after DNS resolves.
