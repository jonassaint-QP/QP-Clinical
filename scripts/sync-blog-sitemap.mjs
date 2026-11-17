// Adds every published blog post in content/blog to public/sitemap.xml.
// Runs automatically before each build (npm "prebuild"), so new posts are
// listed without editing the sitemap by hand.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const postsDirectory = join(root, 'content/blog');
const sitemapPath = join(root, 'public/sitemap.xml');
const startMarker = '  <!-- blog-posts:start -->';
const endMarker = '  <!-- blog-posts:end -->';

const entries = (existsSync(postsDirectory) ? readdirSync(postsDirectory) : [])
  .filter((fileName) => fileName.endsWith('.md'))
  .map((fileName) => {
    const source = readFileSync(join(postsDirectory, fileName), 'utf8');
    const frontMatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    const field = (name) => frontMatter.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^["']|["']$/g, '');
    return { slug: fileName.replace(/\.md$/, ''), date: field('date'), draft: field('draft') === 'true' };
  })
  .filter((post) => !post.draft && post.date)
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((post) => `  <url><loc>https://queerpathways.org/blog/${post.slug}</loc><lastmod>${post.date}</lastmod></url>`);

const sitemap = readFileSync(sitemapPath, 'utf8');
const start = sitemap.indexOf(startMarker);
const end = sitemap.indexOf(endMarker);
if (start === -1 || end === -1) throw new Error('public/sitemap.xml is missing the blog-posts markers.');

const updated = `${sitemap.slice(0, start + startMarker.length)}\n${entries.map((entry) => `${entry}\n`).join('')}${sitemap.slice(end)}`;
if (updated !== sitemap) writeFileSync(sitemapPath, updated);
console.log(`Sitemap lists ${entries.length} blog post(s).`);
