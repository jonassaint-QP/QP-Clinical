// Adds every published blog post in content/blog, and the book page plus its
// excerpts in content/book (once book.md is no longer a draft), to public/sitemap.xml.
// Runs automatically before each build (npm "prebuild"), so new posts are
// listed without editing the sitemap by hand.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const postsDirectory = join(root, 'content/blog');
const sitemapPath = join(root, 'public/sitemap.xml');

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

function frontMatterField(source, name) {
  const frontMatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  return frontMatter.match(new RegExp(`^${name}:[ \\t]*(.*)$`, 'm'))?.[1].trim().replace(/^["']|["']$/g, '');
}

const bookDirectory = join(root, 'content/book');
const excerptsDirectory = join(bookDirectory, 'excerpts');
const today = new Date().toISOString().slice(0, 10);
const bookSource = existsSync(join(bookDirectory, 'book.md')) ? readFileSync(join(bookDirectory, 'book.md'), 'utf8') : null;
const bookEntries = !bookSource || frontMatterField(bookSource, 'draft') === 'true'
  ? []
  : [
      `  <url><loc>https://queerpathways.org/book</loc><lastmod>${today}</lastmod></url>`,
      ...(existsSync(excerptsDirectory) ? readdirSync(excerptsDirectory) : [])
        .filter((fileName) => fileName.endsWith('.md'))
        .filter((fileName) => frontMatterField(readFileSync(join(excerptsDirectory, fileName), 'utf8'), 'draft') !== 'true')
        .sort()
        .map((fileName) => `  <url><loc>https://queerpathways.org/book/${fileName.replace(/\.md$/, '')}</loc><lastmod>${today}</lastmod></url>`),
    ];

function replaceSection(sitemap, name, sectionEntries) {
  const startMarker = `  <!-- ${name}:start -->`;
  const endMarker = `  <!-- ${name}:end -->`;
  const start = sitemap.indexOf(startMarker);
  const end = sitemap.indexOf(endMarker);
  if (start === -1 || end === -1) throw new Error(`public/sitemap.xml is missing the ${name} markers.`);
  return `${sitemap.slice(0, start + startMarker.length)}\n${sectionEntries.map((entry) => `${entry}\n`).join('')}${sitemap.slice(end)}`;
}

const sitemap = readFileSync(sitemapPath, 'utf8');
let updated = replaceSection(sitemap, 'blog-posts', entries);
// Keep an existing book lastmod when nothing about the book list changed, so builds don't churn the date.
const existingBook = sitemap.match(/<!-- book:start -->\n([\s\S]*?)  <!-- book:end -->/)?.[1] ?? '';
const strip = (text) => text.replace(/<lastmod>[^<]*<\/lastmod>/g, '');
const bookChanged = strip(existingBook) !== strip(bookEntries.map((entry) => `${entry}\n`).join(''));
if (bookChanged) updated = replaceSection(updated, 'book', bookEntries);
if (updated !== sitemap) writeFileSync(sitemapPath, updated);
console.log(`Sitemap lists ${entries.length} blog post(s) and ${bookEntries.length} book page(s).`);
