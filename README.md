# Pasabuy Dubai — Shop for Less

A React + Vite site styled with Tailwind, deployed on Netlify. It pulls products from your Facebook Page via a Netlify Function.

## 1) Prereqs
- Node.js 18+ and npm
- A Facebook Page **Page ID** and a **Page Access Token** with `pages_read_engagement`
- Git + GitHub repo: `https://github.com/ronieharmiel/pasabuydubai.git`
- Netlify account

## 2) Local Setup
```bash
npm install
npm run dev
```
Open http://localhost:5173

## 3) Connect Facebook
Create `.env` at the project root or define env in Netlify:
```
FB_PAGE_ID=YOUR_PAGE_ID
FB_ACCESS_TOKEN=YOUR_PAGE_ACCESS_TOKEN
```
Netlify: **Site settings → Environment variables** (same keys).

## 4) Build & Deploy to Netlify
```bash
npm run build
```
- Push to GitHub and connect repository on Netlify
- Or use **New site from Git** on Netlify and select this repo
- Ensure `netlify.toml` is detected

## 5) Git Commands
```bash
git init
git remote add origin https://github.com/ronieharmiel/pasabuydubai.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 6) Messenger Chat Plugin
Edit `index.html` and replace `YOUR_PAGE_ID` with your actual Page ID. The plugin will render on the site.

## 7) Payments
Find Bank/GCash details on **Payments & Contact** page and update if needed.

## 8) Common Issues
- If products don't show: verify FB env vars and token permissions; check Netlify Functions logs.
- SPA routing 404 on Netlify: handled by `netlify.toml` redirects.
