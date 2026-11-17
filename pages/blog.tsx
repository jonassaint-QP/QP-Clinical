import { InteriorPage } from '../components/InteriorPage';

const substackHome = 'https://queerpathways.substack.com/';

// Featured posts from Pathways to Connection on Substack.
// Add a post here only after its live URL has been checked.
const featuredPosts = [
  {
    title: 'The Room Was the Point',
    date: 'November 4, 2026',
    summary: 'Gay bars, drinking, and the sober spaces being built now.',
    href: 'https://queerpathways.substack.com/p/the-room-was-the-point',
  },
  {
    title: 'Take Me to Church, and the Lover Who Becomes the Pew',
    date: 'October 30, 2026',
    summary: "Hozier's \"Take Me to Church\" is about a man who walks out of one church and straight into another.",
    href: 'https://queerpathways.substack.com/p/take-me-to-church-and-the-lover-who',
  },
  {
    title: 'What Happens to Desire After Chemsex',
    date: 'September 11, 2026',
    summary: 'For anyone who has recently stepped away from sexualized substance use, and is wondering what desire looks like now.',
    href: 'https://queerpathways.substack.com/p/what-happens-to-desire-after-chemsex',
  },
  {
    title: 'Consent Before Contact',
    date: 'September 1, 2026',
    summary: 'The grid shapes the body.',
    href: 'https://queerpathways.substack.com/p/consent-before-contact',
  },
  {
    title: 'The Dopamenu on a Boat: An ADHD Survival Guide for the Gay Cruise',
    date: 'August 11, 2026',
    summary: 'The floating sensory maze, and how to get through it.',
    href: 'https://queerpathways.substack.com/p/the-dopamenu-on-a-boat-an-adhd-survival',
  },
  {
    title: 'Whiskey Glasses and the Anatomy of Numbing',
    date: 'August 4, 2026',
    summary: 'What numbing does for us, and what it costs.',
    href: 'https://queerpathways.substack.com/p/whiskey-glasses-and-the-anatomy-of',
  },
];

export default function BlogPage() {
  return (
    <InteriorPage
      title="LGBTQ+ Mental Health Blog"
      description="Writing for gay, bi, and queer men and the wider LGBTQ+ community on sobriety, chemsex, dating apps, ADHD, desire, and shame, from a Pennsylvania-licensed therapist."
      eyebrow="Pathways to Connection"
      introduction="Plain-spoken writing for gay, bi, trans, and queer adults on gay bars and sobriety, chemsex, dating apps, ADHD, desire, shame, and the messages we were handed about who we're supposed to be. Written by Joshua Jonassaint, LCSW, a Pennsylvania-licensed therapist."
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
              <p>Every post lives on Pathways to Connection, the Queer Pathways newsletter on Substack. Subscribe there to get new writing by email.</p>
              <a href={substackHome} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-[#D3B127] underline">
                Browse all posts on Substack
              </a>
            </div>
          ),
        },
      ]}
      note="The blog is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}
