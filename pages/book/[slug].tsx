import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BookCover, BuyButton } from '../../components/BookCover';
import { ClinicalShell } from '../../components/ClinicalShell';
import { getAllExcerpts, getBook, getExcerptSummaries } from '../../lib/book';
import { bookByline, type BookInfo, type Excerpt, type ExcerptSummary } from '../../lib/book-types';

interface ExcerptPageProps {
  book: BookInfo;
  excerpt: Excerpt;
  next: ExcerptSummary | null;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllExcerpts().map((excerpt) => ({ params: { slug: excerpt.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ExcerptPageProps> = async ({ params }) => {
  const all = getAllExcerpts();
  const index = all.findIndex((item) => item.slug === String(params?.slug));
  if (index === -1) return { notFound: true };
  const summaries = getExcerptSummaries();
  return { props: { book: getBook(), excerpt: all[index], next: summaries[index + 1] ?? null } };
};

export default function ExcerptPage({ book, excerpt, next }: ExcerptPageProps) {
  const url = `https://queerpathways.org/book/${excerpt.slug}`;
  const pageTitle = `${excerpt.title}: An Excerpt from ${book.title}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: excerpt.title,
    description: excerpt.description,
    url,
    isPartOf: { '@type': 'Book', name: book.title, url: 'https://queerpathways.org/book' },
    author: { '@type': 'Person', name: book.author, ...(book.credentials ? { honorificSuffix: book.credentials } : {}), url: 'https://queerpathways.org/' },
  };

  return (
    <ClinicalShell title={pageTitle} description={excerpt.description}>
      <Head>
        {book.draft ? <meta name="robots" content="noindex" /> : null}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={excerpt.description} />
        <meta property="og:url" content={url} />
        {book.cover ? <meta property="og:image" content={`https://queerpathways.org${book.cover}`} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <p className="mb-6 text-sm">
          <Link href="/book" className="text-[#CCDEE0] hover:text-[#CBB26A]">&larr; All excerpts from {book.title}</Link>
        </p>
        <header className="mb-10 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">
            {excerpt.chapter ? `${excerpt.chapter} • ` : ''}{book.title}
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">{excerpt.title}</h1>
          <p className="text-sm text-[#C0BFBC]">By {bookByline(book)}</p>
        </header>

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: excerpt.html }} />

        <aside className="mt-14 grid items-center gap-8 border border-[#3E6830] bg-[#0A1D08] p-6 sm:grid-cols-[8rem_1fr]">
          <div className="mx-auto w-32">
            <BookCover book={book} compact />
          </div>
          <div>
            <p className="text-lg font-bold text-[#CBB26A]">Want more where that came from?</p>
            <p className="mt-2 text-sm text-[#C0BFBC]">
              This is an excerpt from <em>{book.title}</em>{book.status ? ` (${book.status.toLowerCase()})` : ''}.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              {next ? <Link href={`/book/${next.slug}`} className="btn-somatic-primary">Next excerpt: {next.title}</Link> : null}
              <BuyButton book={book} />
            </div>
          </div>
        </aside>

        <aside className="mt-12 border-t border-[#3E6830] pt-10 text-center">
          <p className="mb-6 text-sm text-[#C0BFBC]">
            If something here hit close to home, you don&apos;t have to untangle it alone. Individual and couples therapy is available by secure telehealth across Pennsylvania.
          </p>
          <a href="/#therapy-notes-widget" className="btn-somatic-primary">Adjourn the Courtroom, Book Your Intake Assessment</a>
        </aside>

        <p className="mt-10 text-center text-xs text-[#C0BFBC]/70">
          Memoir and reflective writing, not individualized clinical advice. See the{' '}
          <Link href="/memoir-disclaimer" className="underline">memoir disclaimer</Link>.
        </p>
      </article>
    </ClinicalShell>
  );
}
