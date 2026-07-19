import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = 'https://CorbettIndustries.co';
const contentPath = resolve(process.cwd(), 'src/lib/content.ts');
const sitemapPath = resolve(process.cwd(), 'public/sitemap.xml');

const content = readFileSync(contentPath, 'utf8');
const slugPattern = /slug:\s*'([^']+)'/g;
const slugs = new Set();

for (const match of content.matchAll(slugPattern)) {
  slugs.add(match[1]);
}

const staticPaths = ['/', '/guides'];
const guidePaths = [...slugs].map((slug) => `/guides/${slug}`);
const allPaths = [...staticPaths, ...guidePaths];
const lastmod = new Date().toISOString().split('T')[0];

const urls = allPaths
  .map((path) => {
    const loc = `${siteUrl}${path === '/' ? '/' : path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Generated sitemap with ${allPaths.length} URLs at ${sitemapPath}`);