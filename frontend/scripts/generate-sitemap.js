#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://jiya.dev';
const TODAY = new Date().toISOString().split('T')[0];

// Only list public, indexable pages.
// Exclude admin, login, thank-you, 404, and test pages as per launch rules.
const publicPages = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: TODAY,
  },
  {
    path: '/privacy',
    changefreq: 'monthly',
    priority: '0.3',
    lastmod: TODAY,
  },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPages
  .map(
    (page) => `  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml.trim() + '\n', 'utf-8');

console.log(`[Sitemap] Successfully generated ${outputPath} with ${publicPages.length} public pages (lastmod: ${TODAY}).`);
