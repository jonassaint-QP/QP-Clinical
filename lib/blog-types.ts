// Client-safe blog types and helpers. Keep Node-only code (fs) in lib/blog.ts.

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  substackUrl: string | null;
}

export interface Post extends PostSummary {
  html: string;
}

export function formatPostDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
