import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ClinicalShell } from '../../components/ClinicalShell';
import { getPostSummaries } from '../../lib/blog';
import { formatPostDate, type PostSummary } from '../../lib/blog-types';

const substackHome = 'https://queerpathways.substack.com/';

// Newsletter posts not yet moved onto this site. When a post gets its own
// file in content/blog, remove it from this list so it isn't shown twice.
const newsletterPosts = [
  { title: 'The Room Was the Point', date: 'November 4, 2026', href: 'https://queerpathways.substack.com/p/the-room-was-the-point' },
  { title: 'Take Me to Church, and the Lover Who Becomes the Pew', date: 'October 30, 2026', href: 'https://queerpathways.substack.com/p/take-me-to-church-and-the-lover-who' },
  { title: 'What Happens to Desire After Chemsex', date: 'September 11, 2026', href: 'https://queerpathways.substack.com/p/what-happens-to-desire-after-chemsex' },
  { title: 'Consent Before Contact', date: 'September 1, 2026', href: 'https://queerpathways.substack.com/p/consent-before-contact' },
  { title: 'The Dopamenu on a Boat: An ADHD Survival Guide for the Gay Cruise', date: 'August 11, 2026', href: 'https://queerpathways.substack.com/p/the-dopamenu-on-a-boat-an-adhd-survival' },
  { title: 'Whiskey Glasses and the Anatomy of Numbing', date: 'August 4, 2026', href: 'https://queerpathways.substack.com/p/whiskey-glasses-and-the-anatomy-of' },
];

interface BlogIndexProps {
  posts: PostSummary[];
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => ({
  props: { posts: getPostSummaries() },
});

export default function BlogIndexPage({ posts }: BlogIndexProps) {
  return (
    <ClinicalShell
      title="LGBTQ+ Mental Health Blog"
      description="Writing for gay, bi, trans, and queer adults on shame, sobriety, chemsex, dating apps, ADHD, and desire, from a Pennsylvania-licensed therapist in Philadelphia."
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <header className="mb-12 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Pathways to Connection</p>
          <h1 className="mb-5 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">LGBTQ+ Mental Health Blog</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#C0BFBC]">
            Plain-spoken writing for gay, bi, trans, and queer adults on shame, sobriety, chemsex, dating apps, ADHD, desire, and the messages we were handed about who we&apos;re supposed to be. Written by Joshua Jonassaint, LCSW, a Pennsylvania-licensed therapist.
          </p>
        </header>

        {posts.length > 0 ? (
          <section aria-labelledby="latest-posts" className="mb-14">
            <h2 id="latest-posts" className="mb-6 text-2xl font-bold text-[#CBB26A]">Latest posts</h2>
            <ul className="space-y-8">
              {posts.map((post) => (
                <li key={post.slug} className="somatic-card">
                  <p className="text-xs font-bold uppercase text-[#D3B127]">{formatPostDate(post.date)}</p>
                  <h3 className="mt-2 text-xl font-bold text-[#CBB26A]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C0BFBC]">{post.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section aria-labelledby="newsletter-posts" className="somatic-card">
          <h2 id="newsletter-posts" className="mb-4 text-2xl font-bold text-[#CBB26A]">From the newsletter</h2>
          <ul className="space-y-4">
            {newsletterPosts.map((post) => (
              <li key={post.href}>
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#D3B127] underline">{post.title}</a>
                <span className="ml-2 text-xs text-[#C0BFBC]/70">{post.date}</span>
              </li>
            ))}
          </ul>
          <a href={substackHome} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-[#CCDEE0] underline">
            Subscribe on Substack to get new posts by email
          </a>
        </section>

        <p className="mt-10 text-center text-xs text-[#C0BFBC]/70">The blog is educational and reflection-oriented. It does not replace individualized care.</p>
      </div>
    </ClinicalShell>
  );
}
