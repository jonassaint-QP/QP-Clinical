import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';
import { parseFrontMatter } from './blog';
import type { BookInfo, Excerpt, ExcerptSummary } from './book-types';

export type { BookInfo, Excerpt, ExcerptSummary } from './book-types';

// The book lives in content/book.
//
// content/book/book.md holds the book's details in front matter, and a short
// "about the book" in the body:
// ---
// title: Book title
// subtitle: Optional subtitle
// author: Name as printed on the book (defaults to Joshua Jonassaint)
// credentials: Optional letters after the name in the byline, like LCSW
// description: One or two sentences for Google and social previews (under 160 characters).
// status: Optional line under the title, like "Coming spring 2027"
// buyUrl: Optional link to buy, preorder, or join the waitlist
// buyLabel: Optional button text, like "Preorder the book"
// cover: Optional image path in /public, like /images/book-cover.jpg
// coverAlt: Optional description of the cover for screen readers
// draft: true (keeps /book out of Google and the sitemap until it is ready)
// ---
//
// Each excerpt is a Markdown file in content/book/excerpts. The file name (minus .md)
// is the URL, so content/book/excerpts/the-first-night.md is served at /book/the-first-night.
// ---
// title: Excerpt title
// description: One or two sentences for Google and social previews.
// chapter: Optional label, like "From Chapter 3"
// order: 1 (excerpts are listed from lowest to highest)
// draft: true (optional: hides the excerpt until removed)
// ---

const bookDirectory = join(process.cwd(), 'content/book');
const excerptsDirectory = join(bookDirectory, 'excerpts');

export function getBook(): BookInfo {
  const { fields, body } = parseFrontMatter(readFileSync(join(bookDirectory, 'book.md'), 'utf8'));
  for (const required of ['title', 'description']) {
    if (!fields[required]) throw new Error(`content/book/book.md: missing "${required}" in front matter.`);
  }

  return {
    title: fields.title,
    subtitle: fields.subtitle || null,
    author: fields.author || 'Joshua Jonassaint',
    credentials: fields.credentials || null,
    description: fields.description,
    status: fields.status || null,
    buyUrl: fields.buyUrl || null,
    buyLabel: fields.buyLabel || null,
    cover: fields.cover || null,
    coverAlt: fields.coverAlt || null,
    draft: fields.draft === 'true',
    aboutHtml: marked.parse(body, { async: false }) as string,
  };
}

function readExcerpt(fileName: string): Excerpt | null {
  const slug = fileName.replace(/\.md$/, '');
  const { fields, body } = parseFrontMatter(readFileSync(join(excerptsDirectory, fileName), 'utf8'));

  for (const required of ['title', 'description']) {
    if (!fields[required]) throw new Error(`content/book/excerpts/${fileName}: missing "${required}" in front matter.`);
  }
  if (fields.draft === 'true') return null;

  return {
    slug,
    title: fields.title,
    description: fields.description,
    chapter: fields.chapter || null,
    order: Number(fields.order) || 999,
    html: marked.parse(body, { async: false }) as string,
  };
}

export function getAllExcerpts(): Excerpt[] {
  if (!existsSync(excerptsDirectory)) return [];
  return readdirSync(excerptsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(readExcerpt)
    .filter((excerpt): excerpt is Excerpt => excerpt !== null)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export function getExcerptSummaries(): ExcerptSummary[] {
  return getAllExcerpts().map(({ html: _html, ...summary }) => summary);
}

export function getExcerpt(slug: string): Excerpt | null {
  return getAllExcerpts().find((excerpt) => excerpt.slug === slug) ?? null;
}

// Standalone readings from the book that live in the Resource Library rather than the
// /book excerpt sequence. Same front matter as an excerpt (order is ignored).
// content/book/readings/<slug>.md is read by a page under pages/resources/.
const readingsDirectory = join(bookDirectory, 'readings');

export function getBookReading(slug: string): Excerpt {
  const fileName = `${slug}.md`;
  const { fields, body } = parseFrontMatter(readFileSync(join(readingsDirectory, fileName), 'utf8'));
  for (const required of ['title', 'description']) {
    if (!fields[required]) throw new Error(`content/book/readings/${fileName}: missing "${required}" in front matter.`);
  }

  return {
    slug,
    title: fields.title,
    description: fields.description,
    chapter: fields.chapter || null,
    order: 0,
    html: marked.parse(body, { async: false }) as string,
  };
}
