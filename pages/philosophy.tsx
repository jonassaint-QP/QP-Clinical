import Head from 'next/head';
import Image from 'next/image';
import { ClinicalShell } from '../components/ClinicalShell';

// Headshot for the About Me section. Drop the photo into public/images/ and set src
// (for example '/images/joshua-jonassaint-headshot.jpg'). Until then the emblem shows instead.
const headshot = {
  src: '/images/joshua-jonassaint-headshot.jpg',
  alt: 'Joshua Jonassaint, LCSW, smiling in a tan suit on a balcony above a crowded Pride march with rainbow flags',
};


const personJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua Jonassaint',
  honorificSuffix: 'LCSW',
  jobTitle: 'Licensed Clinical Social Worker',
  image: 'https://queerpathways.org/images/joshua-jonassaint-headshot.jpg',
  url: 'https://queerpathways.org/philosophy#about',
  worksFor: { '@type': 'Organization', name: 'Queer Pathways', url: 'https://queerpathways.org' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Rutgers University' },
  knowsAbout: [
    'LGBTQ+ affirming therapy',
    'Therapy for gay and bisexual men',
    'Dialectical Behavior Therapy (DBT)',
    'Trauma-informed therapy',
    'Emotionally Focused Therapy (EFT)',
    'Substance use and chemsex',
    'Couples therapy',
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
            <div className="mb-10 flex justify-center">
              <div className="w-64">
                {headshot.src ? (
                  <Image
                    src={headshot.src}
                    alt={headshot.alt}
                    width={640}
                    height={800}
                    sizes="256px"
                    className="h-80 w-64 border-2 border-[#CBB26A] object-cover"
                  />
                ) : (
                  <div className="flex h-80 w-64 items-center justify-center border-2 border-[#3E6830] bg-[#0A1D08]">
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
            </div>
            <div className="space-y-10 leading-relaxed text-[#C0BFBC]">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">How I got here</h3>
              <div className="space-y-4">
                <p>The first person to call me a social worker was my mother, even though she wasn&apos;t one on paper.</p>
                <p>She was always opening our home to people. Whoever needed a place, a meal, or someone to talk to found their way to her. She did the work of a social worker without ever having the title.</p>
                <p>I watched her do it, and honestly, it scared me. I saw how much she gave. I didn&apos;t want that for myself.</p>
                <p>But in high school, it started happening to me anyway. People kept telling me things. Not because I could fix anything. I couldn&apos;t. They told me because I listened, and they could feel that I was really hearing them.</p>
                <p>So I tried to go another way. In undergrad I studied recreation therapy. In grad school I went into recreation management. For my thesis, I studied bathhouses and sexually transmitted infections among gay men and men who have sex with men.</p>
                <p>I wanted to include trans men in that study, and I wasn&apos;t able to. That stayed with me. It&apos;s part of why I make room for the people that research and therapy so often leave out.</p>
                <p>My grad advisor read my work and said, &quot;This isn&apos;t recreation. This is social work.&quot;</p>
                <p>I finished that degree anyway. But my advisor&apos;s words stuck with me, along with everyone else who had called me a social worker long before I was ready to hear it. At the end of my grad program, I finally listened. I went to social work school.</p>
                <p>So social work doesn&apos;t feel like a job to me. It&apos;s not what I do. It&apos;s who I am. I think I got that from my mom.</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">Why double outsiders</h3>
              <div className="space-y-4">
                <p>I&apos;m queer, Black, non-binary, and neurodivergent. I know what it&apos;s like to be on the outside. And I know what it&apos;s like to be on the outside in more than one way at once.</p>
                <p>When you carry more than one of these, the stress stacks up. You might not feel fully at home in the queer world, or in your own culture, or anywhere. That&apos;s what I mean by a double outsider. I&apos;m not writing about it from far away. I live it.</p>
                <p>I&apos;m a therapist because there&apos;s a huge gap in care for people like us. Too often, a queer client pays for an hour of therapy and spends it teaching. Explaining their relationships. Their sex life. Their family. Their brain. Their words for who they are. That&apos;s the Ambiguity Tax, and you shouldn&apos;t have to pay it in my office.</p>
                <p>With me, you don&apos;t start by explaining yourself. You start where you actually are.</p>
                <p>Gay men hold a special place in my life and my work. But my door is open to all queer lives.</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">Substance use</h3>
              <div className="space-y-4">
                <p>Substance use has been part of my work from the start.</p>
                <p>In undergrad, I did my recreation therapy internship at a substance use treatment center. In grad school, while I studied recreation management, I worked at a substance use treatment center. And in social work school, my internship was at one too. Almost all of my training happened in substance use care.</p>
                <p>I still do this work today. I see people at every stage:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>People who are using right now and aren&apos;t sure they want to stop</li>
                  <li>People who are thinking about quitting</li>
                  <li>People who are in recovery</li>
                </ul>
                <p>That includes chemsex. Nothing here needs a disclaimer.</p>
                <p>You don&apos;t have to live a sober life to work with me. I understand use. Every behavior we have serves us in some way. We do it because we think it will make life better. And every behavior has a cost. So together, we look at it: Is the cost worth paying? Sometimes it is. I get that.</p>
                <p>One thing I do ask: come to session sober. If you show up high or drunk, I&apos;ll end the session. That&apos;s not a punishment. It&apos;s the standard of care, and you just won&apos;t get much out of therapy that way. We&apos;ll pick it back up next time.</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">What it&apos;s like to work with me</h3>
              <div className="space-y-4">
                <p>I&apos;m warm, I&apos;m direct, and I curse sometimes. I try to filter it, but every once in a while it slips out.</p>
                <p>Being direct means you&apos;ll never have to guess what I&apos;m thinking. If I notice something, I&apos;ll say it: &quot;Here&apos;s what I&apos;m seeing. Here&apos;s what I&apos;m thinking.&quot; No hidden notes, no poker face. You won&apos;t have to wonder what I think of you, because I&apos;ll tell you.</p>
                <p>Our first session starts simple. I&apos;ll ask something like, &quot;What brings you here?&quot; And then we talk. I don&apos;t have a list of questions to get through.</p>
                <p>Clients tell me I&apos;m a good listener. A lot of what I do is be a sounding board. You talk, and I tell you back what I&apos;m hearing, honestly and without judgment. Sometimes hearing your own thoughts from someone else is what finally makes them make sense.</p>
                <p>Sometimes I&apos;ll suggest homework. It&apos;s really just an exercise we talked about in session. Whether you do it is up to you. If you&apos;d like to talk about it next time, great. If not, that&apos;s fine too. I won&apos;t put you on the spot or make you feel bad for forgetting. We&apos;ll just keep moving.</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">Credentials and training</h3>
              <div className="space-y-4">
                <ul className="list-disc space-y-2 pl-6">
                  <li>LCSW, Pennsylvania (CW023073)</li>
                  <li>MSW, Rutgers University</li>
                  <li>10+ years in practice</li>
                  <li>Dialectical Behavior Therapy (DBT), certificate of completion. DBT builds skills for strong emotions, stress, and relationships.</li>
                  <li>Emotionally Focused Therapy (EFT), Externship completed through the International Centre for Excellence in Emotionally Focused Therapy (ICEEFT). EFT helps people understand the feelings and needs underneath their closest relationships.</li>
                  <li>Trauma-informed, with coursework in Eye Movement Desensitization and Reprocessing (EMDR), Internal Family Systems (IFS), and other trauma approaches</li>
                </ul>
                <p><strong className="text-[#CCDEE0]">A note on trauma.</strong> I&apos;m trauma-informed, not a trauma specialist. I work with the everyday, ongoing kinds of trauma: the slow, wearing hurt of growing up different, being misread, or never quite fitting. If you&apos;re dealing with a recent or severe trauma, I&apos;ll refer you to a trauma therapist I know and trust. When that work is done, you&apos;re welcome back with me, and we&apos;ll keep going with the rest of your life.</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-[#CBB26A]">A little about me</h3>
              <div className="space-y-4">
                <p>Living with neurodivergence has always been a bit of a mess, and honestly, it still is. The two places I feel most at ease are in session, where I know exactly what I need to focus on, and at home, when I know there&apos;s nothing left to do but relax.</p>
                <p>I don&apos;t have pets. I have a plant, a Monstera deliciosa.</p>
                <p>And I don&apos;t cry, not in real life. Unless I&apos;m watching Grey&apos;s Anatomy. Then I can&apos;t stop, even if I&apos;ve seen the episode five times.</p>
              </div>
            </div>
            </div>
            <div className="mt-10 border-t border-[#3E6830] pt-8 text-center">
              <p className="mb-6 text-lg font-semibold text-[#CCDEE0]">If any of this sounds like you, I&apos;d like to meet you.</p>
              <button type="button" onClick={scrollToBookingWidget} className="btn-somatic-primary">
                Book your intake assessment
              </button>
            </div>
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