import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { BookCover, BuyButton } from '../../components/BookCover';
import { ClinicalShell } from '../../components/ClinicalShell';
import { getBook, getExcerptSummaries } from '../../lib/book';
import { bookByline, type BookInfo, type ExcerptSummary } from '../../lib/book-types';

interface BookPageProps {
  book: BookInfo;
  excerpts: ExcerptSummary[];
}

export const getStaticProps: GetStaticProps<BookPageProps> = async () => ({
  props: { book: getBook(), excerpts: getExcerptSummaries() },
});

export default function BookPage({ book, excerpts }: BookPageProps) {
  const url = 'https://queerpathways.org/book';
  const pageTitle = `${book.title}: Read Excerpts from the Book by ${book.author}`;
  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    ...(book.subtitle ? { alternativeHeadline: book.subtitle } : {}),
    description: book.description,
    url,
    ...(book.cover ? { image: `https://queerpathways.org${book.cover}` } : {}),
    author: {
      '@type': 'Person',
      name: book.author,
      ...(book.credentials ? { honorificSuffix: book.credentials } : {}),
      url: 'https://queerpathways.org/',
    },
    publisher: { '@type': 'Organization', name: 'Queer Pathways', url: 'https://queerpathways.org/' },
    hasPart: excerpts.map((excerpt) => ({
      '@type': 'CreativeWork',
      name: excerpt.title,
      url: `${url}/${excerpt.slug}`,
    })),
  };

  return (
    <ClinicalShell title={pageTitle} description={book.description}>
      <Head>
        {book.draft ? <meta name="robots" content="noindex" /> : null}
        <meta property="og:type" content="book" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={book.description} />
        <meta property="og:url" content={url} />
        {book.cover ? <meta property="og:image" content={`https://queerpathways.org${book.cover}`} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema).replace(/</g, '\\u003c') }} />
      </Head>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <header className="mb-14 grid items-center gap-10 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-10 md:grid-cols-[minmax(0,15rem)_1fr]">
          <div className="mx-auto w-full max-w-[15rem]">
            <BookCover book={book} priority />
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">The book{book.status ? ` • ${book.status}` : ''}</p>
            <h1 className="text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">{book.title}</h1>
            {book.subtitle ? <p className="mt-3 text-xl italic text-[#CCDEE0]">{book.subtitle}</p> : null}
            <p className="mt-4 text-sm text-[#C0BFBC]">By {bookByline(book)}</p>
            <div className="blog-prose mt-6" dangerouslySetInnerHTML={{ __html: book.aboutHtml }} />
            <div className="mt-8 flex flex-wrap gap-4">
              {excerpts.length > 0 ? (
                <Link href={`/book/${excerpts[0].slug}`} className="btn-somatic-primary">Start reading</Link>
              ) : null}
              <BuyButton book={book} />
            </div>
          </div>
        </header>

        <section aria-labelledby="excerpts">
          <h2 id="excerpts" className="mb-6 text-2xl font-bold text-[#CBB26A]">Read the excerpts</h2>
          {excerpts.length > 0 ? (
            <ol className="space-y-6">
              {excerpts.map((excerpt) => (
                <li key={excerpt.slug} className="somatic-card">
                  {excerpt.chapter ? <p className="text-xs font-bold uppercase text-[#D3B127]">{excerpt.chapter}</p> : null}
                  <h3 className="mt-2 text-xl font-bold text-[#CBB26A]">
                    <Link href={`/book/${excerpt.slug}`} className="hover:underline">{excerpt.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C0BFBC]">{excerpt.description}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="somatic-card text-[#C0BFBC]">
              The first excerpts are on their way. In the meantime, the{' '}
              <Link href="/blog" className="text-[#D3B127] underline">blog</Link> has plenty to keep you company.
            </p>
          )}
        </section>

        <p className="mt-12 text-center text-xs text-[#C0BFBC]/70">
          This is memoir and reflective writing, not individualized clinical advice. Names and details may be changed. Read the{' '}
          <Link href="/memoir-disclaimer" className="underline">memoir disclaimer</Link>.
        </p>
      </div>
    </ClinicalShell>
  );
}
