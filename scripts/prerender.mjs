/**
 * Prerender every route to a static HTML file in dist/.
 *
 * Why: the site is a React SPA. The initial HTML served to crawlers is an empty
 * <div id="root"></div>. This script runs after `vite build`, serves dist/ on
 * localhost, navigates a headless browser to every route, captures the rendered
 * HTML (including per-route <title>, meta, H1, body, nav, JSON-LD), and writes
 * dist/<route>/index.html. Netlify serves the prerendered HTML to crawlers.
 *
 * Hydration: when a real user loads the page, React 18 hydrates the existing
 * DOM instead of replacing it, so the SPA experience is preserved.
 */

import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const projectRoot = dirname(dirname(__filename));
const distDir = join(projectRoot, 'dist');

if (!existsSync(distDir)) {
  console.error('dist/ does not exist. Run `vite build` first.');
  process.exit(1);
}

// Discover blog post slugs from the source so new posts auto-prerender.
const blogPostsSource = readFileSync(
  join(projectRoot, 'src/data/blogPosts.ts'),
  'utf-8',
);
const blogSlugs = [...blogPostsSource.matchAll(/slug:\s*'([^']+)'/g)].map(
  (m) => m[1],
);

const routes = [
  '/',
  '/about',
  '/members',
  '/chapters',
  '/summit',
  '/join',
  '/contact',
  '/privacy',
  '/terms',
  '/code-of-conduct',
  '/blog',
  ...blogSlugs.map((slug) => `/blog/${slug}`),
];

console.log(`Found ${blogSlugs.length} blog posts; ${routes.length} routes to prerender.`);

// Minimal static file server with SPA fallback.
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const server = createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  } catch {
    pathname = req.url;
  }
  let filePath = join(distDir, pathname);

  try {
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, 'index.html');
    }
    if (!existsSync(filePath)) {
      // SPA fallback for unknown routes.
      filePath = join(distDir, 'index.html');
    }
    const ext = extname(filePath);
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
    });
    res.end(readFileSync(filePath));
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
});

const PORT = 5757;
await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`Local server: http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const startTime = Date.now();
let succeeded = 0;
let failed = 0;

for (const route of routes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  // Don't let prerender wait forever on third-party assets like Google Fonts;
  // we just need the DOM rendered. Block fonts.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const resType = req.resourceType();
    // Block fonts, media, and analytics from blocking page load.
    if (
      resType === 'font' ||
      resType === 'media' ||
      req.url().includes('googletagmanager') ||
      req.url().includes('google-analytics')
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });

  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    // Give useEffect-driven document.title and meta updates time to settle.
    await new Promise((r) => setTimeout(r, 400));

    const html = await page.content();

    const outputPath =
      route === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route.slice(1), 'index.html');
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, html, 'utf-8');

    succeeded++;
    process.stdout.write(`  ✓ ${route}\n`);
  } catch (err) {
    failed++;
    process.stderr.write(`  ✗ ${route}  ${err.message}\n`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(
  `\nPrerendered ${succeeded}/${routes.length} routes in ${elapsed}s` +
    (failed ? ` (${failed} failed)` : ''),
);

if (failed > 0) process.exit(1);
