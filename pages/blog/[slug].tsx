import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ClinicalShell } from '../../components/ClinicalShell';
import { getAllPosts, getPost } from '../../lib/blog';
import { formatPostDate, type Post } from '../../lib/blog-types';

interface BlogPostProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const post = getPost(String(params?.slug));
  return post ? { props: { post } } : { notFound: true };
};

export default function BlogPostPage({ post }: BlogPostProps) {
  const url = `https://queerpathways.org/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: url,
    url,
    author: {
      '@type': 'Person',
      name: 'Joshua Jonassaint',
      honorificSuffix: 'LCSW',
      url: 'https://queerpathways.org/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Queer Pathways',
      url: 'https://queerpathways.org/',
      logo: 'https://queerpathways.org/images/217059319_padded_logo.png',
    },
  };

  return (
    <ClinicalShell title={post.title} description={post.description}>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      </Head>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <p className="mb-6 text-sm">
          <Link href="/blog" className="text-[#CCDEE0] hover:text-[#CBB26A]">&larr; All posts</Link>
        </p>
        <header className="mb-10 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">{formatPostDate(post.date)}</p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">{post.title}</h1>
          <p className="text-sm text-[#C0BFBC]">By Joshua Jonassaint, LCSW &bull; Pennsylvania License CW023073</p>
        </header>

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.substackUrl ? (
          <p className="mt-10 text-sm text-[#C0BFBC]">
            This post also went out in the{' '}
            <a href={post.substackUrl} target="_blank" rel="noopener noreferrer" className="text-[#D3B127] underline">Pathways to Connection newsletter</a>.
          </p>
        ) : null}

        <aside className="mt-12 border-t border-[#3E6830] pt-10 text-center">
          <p className="mb-6 text-sm text-[#C0BFBC]">
            Looking for an LGBTQ+ affirming therapist in Philadelphia or anywhere in Pennsylvania? Individual and couples sessions are available by secure telehealth.
          </p>
          <a href="/#therapy-notes-widget" className="btn-somatic-primary">Adjourn the Courtroom, Book Your Intake Assessment</a>
        </aside>

        <p className="mt-10 text-center text-xs text-[#C0BFBC]/70">This post is educational and reflection-oriented. It does not replace individualized care.</p>
      </article>
    </ClinicalShell>
  );
}
