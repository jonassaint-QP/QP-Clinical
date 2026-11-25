import Head from 'next/head';
import { ClinicalShell } from '../../components/ClinicalShell';
import { LgbtqCrisisLines } from '../../components/LgbtqCrisisLines';

const description =
  'The free TL;DR edition of the Queer Pathways DBT Workbook, for queer and trans people with ADHD, autism, or both. DBT skills in five pages or less per chapter, with one worksheet for each chapter.';

const parts = [
  { title: 'Start here', body: 'How the book works, and your own safety plan, made on a steadier day for the days that are not.' },
  { title: 'Your brain and your body', body: 'Your brain map, what DBT is, Wise Mind, and reading your body’s weather.' },
  { title: 'Getting through hard moments', body: 'Getting things done, radical acceptance, overload, meltdowns and shutdowns, and the pause before the urge.' },
  { title: 'Feelings and daily life', body: 'Money, naming your feelings, taking care of your body, learning new things, and falling forward after a mistake.' },
  { title: 'People', body: 'Your social battery, masking and speaking up, school and work, family, and love, dating and your body.' },
  { title: 'Your operating manual', body: 'Putting it all together into a guide to your own brain, plus one worksheet per chapter and a list of resources.' },
];

export default function DbtWorkbookPage() {
  return (
    <ClinicalShell title="Queer Pathways DBT Workbook: The Free TL;DR Edition" description={description}>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <article className="border border-[#3E6830] bg-[#153009] p-6 sm:p-10">
          <header className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Free workbook</p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-normal text-[#CBB26A] sm:text-4xl">Queer Pathways, DBT Workbook: The TL;DR Edition</h1>
            <p className="text-lg font-medium leading-relaxed text-[#CBB26A]">
              Your operating manual, short version. DBT skills for queer and trans people with ADHD, autism, or both. Every chapter is five pages or less.
            </p>
          </header>

          <aside role="note" aria-label="Crisis support" className="mb-8 border-l-4 border-[#D3B127] bg-[#0A1D08] p-5 text-[#CCDEE0]">
            <p className="font-bold text-[#CBB26A]">If you are in danger right now, you do not need a workbook first.</p>
            <p className="mt-2 leading-relaxed">
              Call <strong>911</strong>, or call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline (US and Canada), any time, day or night. You can also go to your nearest emergency room. Queer Pathways does not provide 24/7 crisis support.
            </p>
            <LgbtqCrisisLines />
          </aside>

          <p className="leading-relaxed text-[#C0BFBC]">
            Maybe you have a diagnosis. Maybe you are waiting for one. Maybe you just have a feeling. You belong here either way. This book takes DBT (Dialectical Behavior Therapy) skills and fits them to brains that move fast, loud, or sideways, and to lives shaped by being queer or trans. You get the main ideas, the skills, the safety info, and one radical acceptance piece in every chapter. There is no wrong way to use it. Go in order, or jump to what you need tonight.
          </p>

          <section className="my-8 border border-[#3E6830] bg-[#020501]/60 p-6 sm:p-8" aria-labelledby="download-heading">
            <h2 id="download-heading" className="mb-3 text-xl font-bold text-[#CBB26A]">Get the workbook</h2>
            <p className="mb-5 text-sm leading-relaxed text-[#C0BFBC]">
              A 125-page PDF. Read it on your phone or computer, or print the worksheets and use a pen. Free, and no email needed.
            </p>
            <a href="/downloads/queer-pathways-dbt-workbook-tldr.pdf" download="Queer-Pathways-DBT-Workbook-TLDR.pdf" className="btn-somatic-primary inline-block">
              Download the TL;DR edition (PDF)
            </a>
          </section>

          <section aria-labelledby="inside-heading">
            <h2 id="inside-heading" className="mb-4 text-xl font-bold text-[#CBB26A]">What is inside</h2>
            <ul className="space-y-4">
              {parts.map((part) => (
                <li key={part.title} className="text-[#C0BFBC]">
                  <span className="font-bold text-[#D3B127]">{part.title}.</span> {part.body}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8" aria-labelledby="who-heading">
            <h2 id="who-heading" className="mb-4 text-xl font-bold text-[#CBB26A]">Good to know</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#C0BFBC]">
              <li>The book is written for ages 18 to 25, with notes for readers under 18 along the way.</li>
              <li>A few sections about sex, kink, and drugs are marked 18+. They are about safety and harm reduction, without judgment.</li>
              <li>Want to print the worksheets on their own? <a href="/resources/dbt-workbook-worksheets" className="font-semibold text-[#D3B127] underline">Get them free, one chapter at a time</a>.</li>
              <li>Want the stories, the research, and every worksheet? The full workbook and the worksheet book are coming soon.</li>
              <li>Clients, bring it to session. We can work through it together.</li>
            </ul>
          </section>

          <aside className="mt-10 border-t border-[#3E6830] pt-6 text-sm leading-relaxed text-[#C0BFBC]/75">
            <p>
              This workbook is for education and self-reflection. Using it does not create a therapist-client relationship with Joshua Jonassaint, LCSW, or with Queer Pathways, and it does not replace individualized care. For 24/7 crisis support, call or text 988.
            </p>
          </aside>
        </article>
      </div>
    </ClinicalShell>
  );
}
