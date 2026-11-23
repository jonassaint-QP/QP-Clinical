import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { InteriorPage } from '../../components/InteriorPage';
import { LgbtqCrisisLines } from '../../components/LgbtqCrisisLines';
import { getPostSummaries } from '../../lib/blog';
import { formatPostDate, type PostSummary } from '../../lib/blog-types';
import { getBook, getExcerptSummaries } from '../../lib/book';
import { bookByline, type BookInfo } from '../../lib/book-types';

interface ResourceLibraryProps {
  latestPost: PostSummary | null;
  book: BookInfo | null;
  excerptCount: number;
}

export const getStaticProps: GetStaticProps<ResourceLibraryProps> = async () => ({
  props: (() => {
    const book = getBook();
    return {
      latestPost: getPostSummaries()[0] ?? null,
      book: book.draft ? null : book,
      excerptCount: book.draft ? 0 : getExcerptSummaries().length,
    };
  })(),
});

export default function ResourceLibraryPage({ latestPost, book, excerptCount }: ResourceLibraryProps) {
  return (
    <InteriorPage
      title="The Resource Library"
      description="Approved educational resources for neurodivergent and kink-fluent lives."
      eyebrow="Queer Pathways resource library"
      introduction="This curated set of approved educational resources and reflection tools is for 2SLGBTQI+ men, non-binary people, neurodivergent professionals, and anyone building a life with less translation."
      sections={[
        ...(book
          ? [{
              title: 'The book: read the excerpts',
              body: (
                <div>
                  <h3 className="text-xl font-bold text-[#CBB26A]">{book.title}</h3>
                  {book.subtitle ? <p className="mt-2 italic text-[#CCDEE0]">{book.subtitle}</p> : null}
                  <p className="mt-2 text-xs text-[#C0BFBC]">By {bookByline(book)}</p>
                  <p className="mt-3">{book.description}</p>
                  <Link href="/book" className="mt-4 inline-block font-semibold text-[#D3B127] underline">
                    {excerptCount > 0 ? 'Start reading the excerpts' : 'About the book'}
                  </Link>
                </div>
              ),
            }]
          : []),
        {
          title: 'Latest from the blog',
          body: (
            <div>
              {latestPost ? (
                <>
                  <p className="text-xs font-bold uppercase text-[#D3B127]">{formatPostDate(latestPost.date)}</p>
                  <h3 className="mt-3 text-xl font-bold text-[#CBB26A]">{latestPost.title}</h3>
                  <p className="mt-3">{latestPost.description}</p>
                  <Link href={`/blog/${latestPost.slug}`} className="mt-4 inline-block font-semibold text-[#D3B127] underline">
                    Read the latest article
                  </Link>
                </>
              ) : null}
              <p className="mt-4">
                <Link href="/blog" className="font-semibold text-[#CCDEE0] underline">See every post on the blog</Link>
              </p>
            </div>
          ),
        },
        {
          title: 'Start with the current collection',
          body: (
            <ul className="space-y-5">
              <li>
                <a href="/resources/safety-plan" className="font-bold text-[#D3B127] underline">My Safety Plan</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">A free, fillable worksheet for mapping your warning signs, coping steps, people, and crisis lines before a hard moment hits.</p>
              </li>
              <li>
                <a href="/resources/radical-acceptance" className="font-bold text-[#D3B127] underline">Radical acceptance, a first look: this is my brain</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">A short DBT read from Pathways to Presence on making peace with your ADHD, autistic, or AuDHD brain, with a one-breath practice to try right now.</p>
              </li>
              <li>
                <a href="/resources/adhd-survival-card" className="font-bold text-[#D3B127] underline">The ADHD Survival Card</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">A scannable reference for the neurodivergent, kink-affirming, and chronically overstimulated.</p>
              </li>
              <li>
                <a href="/resources/thriving-ten-rules" className="font-bold text-[#D3B127] underline">Ten Rules for Thriving</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">Practical systems for Double-Outsider lives beyond moral effort.</p>
              </li>
              <li>
                <a href="/resources/glossary" className="font-bold text-[#D3B127] underline">Glossary of Terms of Art</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The shared language this practice works in, defined in plain terms.</p>
              </li>
              <li>
                <a href="/resources/adhd-survival-guide" className="font-bold text-[#D3B127] underline">ADHD Survival Guide</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The longer companion to the survival card.</p>
              </li>
              <li>
                <a href="/resources" className="font-bold text-[#D3B127] underline">Everything in the library</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The full set of resources, clinical notices and practice documents.</p>
              </li>
            </ul>
          ),
        },
        {
          title: 'If you need help right now',
          body: (
            <>
              <p>Call <strong>911</strong>, or call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline (US and Canada), any time, day or night. Queer Pathways does not provide 24/7 crisis support, and nothing in this library is a substitute for it.</p>
              <LgbtqCrisisLines />
            </>
          ),
        },
        {
          title: 'New material is added only after review',
          body: (
            <p>Everything on this page is hosted here, on the practice's own domain. New material is added after its content and approval note are verified, and nothing is linked before that point.</p>
          ),
        },
      ]}
      note="This library is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}
