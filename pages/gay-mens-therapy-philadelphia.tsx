import Head from 'next/head';
import Link from 'next/link';
import { ClinicalShell } from '../components/ClinicalShell';

const pageTitle = 'Therapy for Gay, Bi & Queer Men in Philadelphia, PA | Telehealth';
const pageDescription =
  'Affirming online therapy for gay, bi, and queer men in Philadelphia and across Pennsylvania. Shame, dating, chemsex, kink, open relationships, ADHD, and couples work with Joshua Jonassaint, LCSW. In-network with Aetna and Highmark BCBS.';

const reasons = [
  {
    title: 'Shame That Learned to Look Like Fine',
    body: 'Growing up gay or bi often means learning to watch yourself from the outside. Years later it shows up as perfectionism, people-pleasing, or a quiet sense that you are performing your own life. We work on that directly, without asking you to edit yourself.',
  },
  {
    title: 'Dating, Apps & Connection',
    body: 'Hookup culture, ghosting, body image, and the loneliness that can sit right next to a busy social life. We look at what you actually want from connection and what keeps getting in the way.',
  },
  {
    title: 'Chemsex, Substances & Desire',
    body: 'Judgment-free support for men whose sex life and substance use have become tangled together, including what happens to desire and intimacy when you change the pattern.',
  },
  {
    title: 'Kink, Leather & Open Relationships',
    body: 'Kink, BDSM, leather, polyamory, and ENM are not disclosures here; they are part of who you are. No explaining, no Ambiguity Tax.',
  },
  {
    title: 'ADHD, RSD & Burnout',
    body: 'If ADHD makes you feel "too much" and "not enough" at the same time, and rejection sensitivity shadows your relationships, we build scaffolding that fits how your brain actually works.',
  },
  {
    title: 'Couples & Relationship Therapy',
    body: 'For gay, bi, and queer male couples working through trust, communication, desire mismatch, opening a relationship, or repair after a rupture.',
  },
];

const faqs = [
  {
    question: 'Do you only see clients in Philadelphia?',
    answer:
      'No. All sessions are by secure telehealth, so any adult physically located in Pennsylvania during the session can work with Queer Pathways, from Philly and the surrounding counties to Pittsburgh.',
  },
  {
    question: 'Do you take insurance?',
    answer:
      'Queer Pathways is in-network with Aetna and Highmark Blue Cross Blue Shield in Pennsylvania. For other plans, Thrizer handles out-of-network reimbursement, or we provide superbills you can submit yourself.',
  },
  {
    question: 'Is this only for gay men?',
    answer:
      'This page is written for gay, bi, and queer men, including men who are questioning, coming out later in life, or who have sex with men without using any label. The practice also works with trans, non-binary, and queer clients of every gender.',
  },
  {
    question: 'What happens in the first session?',
    answer:
      'The first session is a 90-minute intake assessment. We talk about what brought you here, what you want to change, and whether we are a good fit. You do not need to have it all figured out first.',
  },
];

const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}).replace(/</g, '\\u003c');

export default function GayMensTherapyPage() {
  return (
    <ClinicalShell title={pageTitle} description={pageDescription}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      </Head>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <header className="mb-12 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Pennsylvania • LCSW CW023073 • Telehealth</p>
          <h1 className="mb-5 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">
            Therapy for Gay, Bi &amp; Queer Men in Philadelphia and Across Pennsylvania
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#C0BFBC]">
            It&apos;s exhausting to perform for an invisible audience. You are not a metric to be optimized; you are worthy of messy, uncurated joy. Queer Pathways offers affirming, trauma-informed therapy for gay, bi, and queer men in Philadelphia and anywhere in Pennsylvania, all by secure telehealth. You don&apos;t have to edit yourself to get support.
          </p>
        </header>

        <h2 className="mb-6 text-2xl font-bold text-[#CBB26A]">What Brings Men Here</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <section key={reason.title} className="somatic-card">
              <h3 className="mb-3 text-xl font-bold text-[#CBB26A]">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">{reason.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12 border border-[#3E6830] bg-[#153009] p-6 sm:p-8">
          <h2 className="mb-4 text-2xl font-bold text-[#CBB26A]">How We Work Together</h2>
          <p className="mb-4 text-sm leading-relaxed text-[#C0BFBC]">
            Sessions are with Joshua Jonassaint, LCSW, and draw on DBT skills, trauma-focused and somatic work, and sex therapy, adapted for queer bodies and queer lives. Individual sessions are 50 minutes. Couples and relationship sessions are available too.
          </p>
          <p className="text-sm leading-relaxed text-[#C0BFBC]">
            Want to read first? Start with{' '}
            <Link href="/blog/finding-a-gay-affirming-therapist-in-philadelphia" className="font-semibold text-[#D3B127] hover:underline">
              How to Find a Gay-Affirming Therapist in Philadelphia
            </Link>{' '}
            or{' '}
            <Link href="/blog/what-happens-to-desire-after-chemsex" className="font-semibold text-[#D3B127] hover:underline">
              What Happens to Desire After Chemsex
            </Link>
            , or see{' '}
            <Link href="/services" className="font-semibold text-[#D3B127] hover:underline">
              all services and rates
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-[#CBB26A]">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-[#3E6830] bg-[#0A1D08] p-5">
                <h3 className="mb-2 font-bold text-[#CBB26A]">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-[#C0BFBC]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-12 border-t border-[#3E6830] pt-10 text-center">
          <p className="mb-6 text-sm text-[#C0BFBC]">
            Hard cap of 7 specialist slots across Pennsylvania. Initial consultation pathways are offered within seven business days of inquiry, subject to jurisdiction and clinical fit.
          </p>
          <a href="/#therapy-notes-widget" className="btn-somatic-primary">
            Adjourn the Courtroom, Book Your Intake Assessment
          </a>
        </aside>
      </div>
    </ClinicalShell>
  );
}
