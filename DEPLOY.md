# Deployment Guide: GlobeHost cPanel (tamil.taise.in)

Follow these steps to deploy the app to GlobeHost cPanel:

### 1. Build the Project
Run:
```bash
npm run build
```
This generates the production files inside the `dist/` directory, including:
- `.htaccess` (HTTPS redirect, SPA rewrites, compression, caching)
- `index.html` (with canonical tag `https://tamil.taise.in/`, SEO meta tags, JSON-LD schema)
- `sitemap.xml` & `robots.txt`
- `site.webmanifest` & `favicon.svg` & `og-image.svg`
- `assets/` (optimized JavaScript and CSS bundles)

---

### 2. Upload to GlobeHost cPanel

1. **Log in to your GlobeHost cPanel**.
2. Open **Subdomains** (under Domains):
   - Make sure subdomain `tamil.taise.in` is created.
   - Note its document root (typically `public_html/tamil` or `public_html/tamil.taise.in`).
3. Open **File Manager** (under Files).
4. Navigate to the document root directory for `tamil.taise.in`.
5. **Upload the contents of `dist/`**:
   - Tip: You can zip the contents inside `dist/` (e.g. `tamil-build.zip`), upload it via File Manager, and click **Extract**.
   - Make sure the files are extracted directly into the subdomain root directory (so `index.html` and `.htaccess` are directly in that folder, not nested inside another `dist` folder).
6. **Ensure Hidden Files are Visible**:
   - In cPanel File Manager, click **Settings** (top right) and check **"Show Hidden Files (dotfiles)"** to make sure `.htaccess` is visible and uploaded.

---

### 3. Google Search Console & SEO Verification

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property: `https://tamil.taise.in/`
3. Submit the sitemap:
   - Go to **Sitemaps** on the left menu.
   - Enter `sitemap.xml` and click **Submit**.
4. Request indexing for the homepage to speed up Google indexing.
