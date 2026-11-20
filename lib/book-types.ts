// Client-safe book types. Keep Node-only code (fs) in lib/book.ts.

export interface BookInfo {
  title: string;
  subtitle: string | null;
  description: string;
  status: string | null;
  buyUrl: string | null;
  buyLabel: string | null;
  cover: string | null;
  coverAlt: string | null;
  draft: boolean;
  aboutHtml: string;
}

export interface ExcerptSummary {
  slug: string;
  title: string;
  description: string;
  chapter: string | null;
  order: number;
}

export interface Excerpt extends ExcerptSummary {
  html: string;
}
