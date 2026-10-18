# Rent 365 website

Static, server-rendered pages for the Rent 365 Android app, hosted free on Cloudflare Pages from this GitHub repository.

| Page | Address |
|---|---|
| Home | `/` |
| Features | `/features` |
| Pricing | `/pricing` |
| Help centre | `/help` |
| About & contact | `/about` |
| Privacy policy | `/privacy` |
| Terms of service | `/terms` |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |
| AI summary | `/llms.txt` |
| AdMob sellers | `/app-ads.txt` |

## Cloudflare Pages settings
- Framework preset: **None** · Build command: *(empty)* · Build output directory: **/**
- Settings › Variables and Secrets › add **SITE_URL** = `https://yourdomain.in` (your main domain, no trailing slash) › redeploy.
- Security › Bots: turn **off** "Block AI bots" (and AI Labyrinth) so AI search crawlers can read the site.

## Updating
Edit a file and commit. Cloudflare redeploys within a minute.
