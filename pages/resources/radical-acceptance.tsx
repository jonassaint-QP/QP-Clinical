import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ClinicalShell } from '../../components/ClinicalShell';
import { getBook, getBookReading } from '../../lib/book';
import { bookByline, type BookInfo, type Excerpt } from '../../lib/book-types';

// The text lives in content/book/readings/radical-acceptance-this-is-my-brain.md,
// verbatim from Joshua (2026-11-23). Edit the words there, not here.
const readingSlug = 'radical-acceptance-this-is-my-brain';

interface RadicalAcceptanceProps {
  book: BookInfo;
  reading: Excerpt;
}

export const getStaticProps: GetStaticProps<RadicalAcceptanceProps> = async () => ({
  props: { book: getBook(), reading: getBookReading(readingSlug) },
});

export default function RadicalAcceptancePage({ book, reading }: RadicalAcceptanceProps) {
  const url = 'https://queerpathways.org/resources/radical-acceptance';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: reading.title,
    description: reading.description,
    url,
    isPartOf: { '@type': 'Book', name: book.title, url: 'https://queerpathways.org/book' },
    author: { '@type': 'Person', name: book.author, ...(book.credentials ? { honorificSuffix: book.credentials } : {}), url: 'https://queerpathways.org/' },
    citation: 'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.',
  };

  return (
    <ClinicalShell title="Radical Acceptance for ADHD and Autistic Brains: This Is My Brain" description={reading.description}>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={reading.title} />
        <meta property="og:description" content={reading.description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <p className="mb-6 text-sm">
          <Link href="/resources/library" className="text-[#CCDEE0] hover:text-[#CBB26A]">&larr; Back to the Resource Library</Link>
        </p>
        <header className="mb-10 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">DBT skill • {reading.chapter ?? book.title}</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">{reading.title}</h1>
          <p className="text-sm text-[#C0BFBC]">By {bookByline(book)}</p>
        </header>

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: reading.html }} />

        <aside className="mt-14 border border-[#3E6830] bg-[#0A1D08] p-6">
          <p className="text-lg font-bold text-[#CBB26A]">Want to meet Alex?</p>
          <p className="mt-2 text-sm text-[#C0BFBC]">
            This piece comes from <em>{book.title}</em>{book.status ? ` (${book.status.toLowerCase()})` : ''}. Read the opening chapter, where Alex&apos;s story starts.
          </p>
          <Link href="/book" className="btn-somatic-primary mt-5 inline-block">Read the book excerpts</Link>
        </aside>

        <aside className="mt-12 border-t border-[#3E6830] pt-10 text-center">
          <p className="mb-6 text-sm text-[#C0BFBC]">
            If something here hit close to home, you don&apos;t have to untangle it alone. Individual and couples therapy is available by secure telehealth across Pennsylvania.
          </p>
          <a href="/#therapy-notes-widget" className="btn-somatic-primary">Adjourn the Courtroom, Book Your Intake Assessment</a>
        </aside>

        <p className="mt-10 text-center text-xs text-[#C0BFBC]/70">
          Educational and reflective writing, not individualized clinical advice. See the{' '}
          <Link href="/memoir-disclaimer" className="underline">memoir disclaimer</Link>.
        </p>
      </article>
    </ClinicalShell>
  );
}
