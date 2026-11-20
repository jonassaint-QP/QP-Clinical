import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';
import type { Post, PostSummary } from './blog-types';

export type { Post, PostSummary } from './blog-types';

// Blog posts are Markdown files in content/blog. The file name (minus .md) is the URL slug,
// so content/blog/finding-a-gay-affirming-therapist.md is served at /blog/finding-a-gay-affirming-therapist.
//
// Each file starts with a front matter block:
// ---
// title: Post title
// description: One or two sentences for Google and social previews (aim for under 160 characters).
// date: 2026-11-17
// substackUrl: https://queerpathways.substack.com/p/... (optional: the newsletter copy)
// draft: true (optional: hides the post until removed)
// ---

const postsDirectory = join(process.cwd(), 'content/blog');

export function parseFrontMatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error('Markdown file is missing its front matter block.');

  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, '');
    fields[key] = value;
  }

  return { fields, body: match[2] };
}

function readPost(fileName: string): Post | null {
  const slug = fileName.replace(/\.md$/, '');
  const { fields, body } = parseFrontMatter(readFileSync(join(postsDirectory, fileName), 'utf8'));

  for (const required of ['title', 'description', 'date']) {
    if (!fields[required]) throw new Error(`content/blog/${fileName}: missing "${required}" in front matter.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date)) {
    throw new Error(`content/blog/${fileName}: date must look like 2026-11-17.`);
  }
  if (fields.draft === 'true') return null;

  return {
    slug,
    title: fields.title,
    description: fields.description,
    date: fields.date,
    substackUrl: fields.substackUrl || null,
    html: marked.parse(body, { async: false }) as string,
  };
}

export function getAllPosts(): Post[] {
  if (!existsSync(postsDirectory)) return [];
  return readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(readPost)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostSummaries(): PostSummary[] {
  return getAllPosts().map(({ html: _html, ...summary }) => summary);
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}
