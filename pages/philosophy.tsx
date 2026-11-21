import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ClinicalShell } from '../components/ClinicalShell';

// Headshot for the About Me section. Drop the photo into public/images/ and set src
// (for example '/images/joshua-jonassaint-headshot.jpg'). Until then the emblem shows instead.
const headshot = {
  src: '',
  alt: 'Joshua Jonassaint, LCSW, therapist at Queer Pathways',
};

const aboutFacts = [
  { label: 'License', value: 'Licensed Clinical Social Worker (LCSW), Pennsylvania License CW023073' },
  { label: 'Education', value: 'MSW, Rutgers University' },
  { label: 'Experience', value: '12+ years of clinical practice' },
  { label: 'Sessions', value: 'Secure telehealth anywhere in Pennsylvania, from Philly to Pittsburgh' },
  { label: 'Insurance', value: 'In-network with Aetna and Highmark BCBS. Out-of-network plans through Thrizer.' },
];

const personJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua Jonassaint',
  honorificSuffix: 'LCSW',
  jobTitle: 'Licensed Clinical Social Worker',
  url: 'https://queerpathways.org/philosophy#about',
  worksFor: { '@type': 'Organization', name: 'Queer Pathways', url: 'https://queerpathways.org' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Rutgers University' },
  knowsAbout: [
    'LGBTQ+ affirming therapy',
    'Therapy for gay and bisexual men',
    'Dialectical Behavior Therapy (DBT)',
    'Trauma-informed therapy',
    'Couples therapy',
    'Sex therapy',
    'ADHD and neurodivergence',
  ],
  areaServed: { '@type': 'State', name: 'Pennsylvania' },
}).replace(/</g, '\\u003c');

export default function PhilosophyPage() {
  const scrollToBookingWidget = () => {
    window.location.href = '/#therapy-notes-widget';
  };

  return (
    <ClinicalShell
      title="Philosophy & About Joshua Jonassaint, LCSW | Queer Pathways"
      description="We don't believe in broken. Meet Joshua Jonassaint, LCSW, an LGBTQ+ affirming, trauma-informed therapist for queer and neurodivergent adults in Philadelphia and across Pennsylvania."
    >
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
      </Head>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#CBB26A] sm:text-4xl">WE DON'T BELIEVE IN BROKEN</h1>
          <p className="mt-4 text-lg text-[#CCDEE0]">Your identity is not a problem to be solved. Your wiring is not a defect.</p>
        </div>

        <div className="mb-12 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 shadow-lg">
          <p className="text-base font-medium text-[#C0BFBC]">Every framework at Queer Pathways starts from the same radical premise: you are a whole person navigating a world that wasn't built for your wiring, your desire, or your brilliance. Traditional mental health tells queer and neurodivergent people that the malfunction is inside them. We think that's backwards.</p>
        </div>

        <section className="space-y-10 text-left">
          <div className="border border-[#3E6830] bg-[#153009] p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-[#CBB26A]">The Double-Outsider Framework</h2>
            <p className="leading-relaxed text-[#C0BFBC]">You are queer in spaces built for straight neurotypicals. You are neurodivergent in spaces that penalize your actual wiring. You are brilliant in a culture that calls your processing speed a disability. That is not a contradiction. That is pattern recognition in a world that does not want to be examined.</p>
            <p className="mt-4 leading-relaxed text-[#C0BFBC]">The Double-Outsider does not lack insight. You oversee. You have learned to scan every room for exits, decode social scripts in real time, and carry the mental load of existing at intersections that most people never have to consider. That hypervigilance is your survival architecture. It kept you safe. And it is also exhausting you.</p>
          </div>

          <div className="border border-[#3E6830] bg-[#153009] p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-[#CBB26A]">The Internal Courtroom</h2>
            <p className="leading-relaxed text-[#C0BFBC]">This is what we mean when we talk about litigating your existence. Every conversation becomes a cross-examination. Every email draft gets re-litigated. Every moment of feeling too much or not enough plays on a loop with you acting as judge, jury, and defendant all at once.</p>
            <p className="mt-4 font-semibold text-[#D3B127]">We do not help you win the case. We help you adjourn the court.</p>
          </div>

          <div className="border border-[#3E6830] bg-[#153009] p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-[#CBB26A]">The Ambiguity Tax</h2>
            <p className="leading-relaxed text-[#C0BFBC]">There is a specific cost to existing as a double-outsider, and it is not just emotional. It is cognitive, financial, and relational. It is the extra forty-five minutes you spend decoding a group text. The career ceiling that appears when you stop masking. The clinical intake where you have to explain your own identity before you can receive basic care. We name the Ambiguity Tax so you can stop paying it in silence.</p>
          </div>

          <div className="border border-[#3E6830] bg-[#0A1D08] p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-[#CBB26A]">What We Offer Instead</h2>
            <ul className="space-y-4 text-sm text-[#C0BFBC]">
              <li><strong className="text-[#CCDEE0]">Scaffolding, not fixing:</strong> We do not believe your executive function needs correction. We build systems around your actual operating system.</li>
              <li><strong className="text-[#CCDEE0]">Relational sovereignty:</strong> Desire is not an edge case in this room. Kink, polyamory, non-monogamy, and your specific relational architecture are yours to design.</li>
              <li><strong className="text-[#CCDEE0]">Gender on your timeline:</strong> No required waiting periods. No gatekeeping. No proving you are trans enough.</li>
              <li><strong className="text-[#CCDEE0]">Trauma-informed by default:</strong> Not a checkbox or a wall certification. It is how we structure every session.</li>
            </ul>
          </div>

          <div id="about" className="scroll-mt-24 border border-[#3E6830] bg-[#153009] p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-[#CBB26A]">About Me</h2>
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="mx-auto w-48 shrink-0 md:mx-0">
                {headshot.src ? (
                  <Image
                    src={headshot.src}
                    alt={headshot.alt}
                    width={384}
                    height={480}
                    className="h-60 w-48 border-2 border-[#CBB26A] object-cover"
                  />
                ) : (
                  <div className="flex h-60 w-48 items-center justify-center border-2 border-[#3E6830] bg-[#0A1D08]">
                    <Image
                      src="/images/217059319_padded_logo.png"
                      alt="Queer Pathways emblem"
                      width={140}
                      height={140}
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                )}
                <p className="mt-3 text-center text-sm font-semibold text-[#CCDEE0]">Joshua Jonassaint, LCSW</p>
              </div>

              <div className="space-y-4 leading-relaxed text-[#C0BFBC]">
                <p className="text-lg font-semibold text-[#CCDEE0]">Hi, I&apos;m Joshua. Welcome in.</p>
                <p>I&apos;m the therapist behind Queer Pathways, and I&apos;ve spent more than twelve years doing this work. When you book here, you work with me directly. No rotating intake team, and no re-explaining your whole life to a new face every few months.</p>
                <p>I work with gay, bi, trans, and queer adults, and especially with queer men and neurodivergent folks who are exhausted from performing for an invisible audience. If you scan every room for exits, mask until you crash, and re-litigate every text you send, you&apos;re in the right place. Kink, polyamory and ENM, sex work, chemsex, ADHD, autism: none of it needs a disclaimer in my office.</p>
                <p>My toolbox includes DBT skills (I also run a <Link href="/consultation" className="font-semibold text-[#D3B127] hover:underline">DBT consultation group</Link> for other therapists), trauma-focused and somatic work, emotionally focused couples work, mindfulness, and sex therapy. I also provide gender-affirming surgery assessments, on your timeline and without the gatekeeping.</p>
                <p>Outside of sessions, I write. My book, <Link href="/book" className="font-semibold text-[#D3B127] hover:underline">Pathways to Presence</Link>, is on the way, and I post regularly on <Link href="/blog" className="font-semibold text-[#D3B127] hover:underline">the blog</Link>. Fair warning: I&apos;m warm, I&apos;m direct, and I curse sometimes. If that sounds like your kind of therapist, let&apos;s talk.</p>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 border-t border-[#3E6830] pt-6 text-sm sm:grid-cols-2">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-bold uppercase tracking-wide text-[#D3B127]">{fact.label}</dt>
                  <dd className="mt-1 text-[#C0BFBC]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="mt-12 text-center">
          <button type="button" onClick={scrollToBookingWidget} className="btn-somatic-primary text-lg">
            Adjourn the Courtroom, Book Your Intake Assessment
          </button>
        </div>
      </div>
    </ClinicalShell>
  );
}