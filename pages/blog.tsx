import { InteriorPage } from '../components/InteriorPage';

const blogHome = 'https://blog.queerpathways.org/';

// Featured posts. Add a post here only after its live URL has been checked.
const featuredPosts = [
  {
    title: 'Sunday Somatic Reset Note',
    date: 'September 6, 2026',
    summary: 'Radical acceptance usually begins in an ugly little moment.',
    href: 'https://blog.queerpathways.org/sunday-somatic-reset-note/',
  },
];

export default function BlogPage() {
  return (
    <InteriorPage
      title="LGBTQ+ Mental Health Blog"
      description="Writing on therapy, shame, relationships, kink, ADHD, and burnout for gay, bi, trans, and queer adults in Philadelphia and across Pennsylvania."
      eyebrow="The Queer Pathways blog"
      introduction="Plain-spoken writing for gay, bi, trans, and queer adults on shame, relationships, kink, ADHD, burnout, and the messages we were handed about who we're supposed to be. Written by Joshua Jonassaint, LCSW, a Pennsylvania-licensed therapist."
      sections={[
        {
          title: 'Featured posts',
          body: (
            <ul className="space-y-6">
              {featuredPosts.map((post) => (
                <li key={post.href}>
                  <p className="text-xs font-bold uppercase text-[#D3B127]">{post.date}</p>
                  <h3 className="mt-2 text-lg font-bold text-[#CBB26A]">
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className="underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2">{post.summary}</p>
                </li>
              ))}
            </ul>
          ),
        },
        {
          title: 'Read the full archive',
          body: (
            <div>
              <p>Every post lives on the Queer Pathways blog, including writing on queer relationships, neurodivergent burnout, and the Internal Courtroom.</p>
              <a href={blogHome} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-[#D3B127] underline">
                Browse all posts
              </a>
            </div>
          ),
        },
      ]}
      note="The blog is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}
