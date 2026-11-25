import Head from 'next/head';
import { ClinicalShell } from '../../components/ClinicalShell';
import { LgbtqCrisisLines } from '../../components/LgbtqCrisisLines';

const description =
  'Free worksheets from the Queer Pathways DBT Workbook, one PDF per chapter. Fill them in on a screen or print them. Made for queer and trans people with ADHD, autism, or both.';

const chapters = [
  { file: '00-start-here', title: 'Start Here: your safety plan and skills tracker', pages: 3 },
  { file: '01-your-brain-your-map', title: 'Chapter 1: Your brain, your map', pages: 12 },
  { file: '02-what-dbt-is', title: 'Chapter 2: What DBT is', pages: 11 },
  { file: '03-wise-mind', title: 'Chapter 3: Wise Mind', pages: 11 },
  { file: '04-your-bodys-weather', title: 'Chapter 4: Your body’s weather', pages: 13 },
  { file: '05-getting-things-done', title: 'Chapter 5: Getting things done', pages: 11 },
  { file: '06-radical-acceptance', title: 'Chapter 6: Radical acceptance', pages: 12 },
  { file: '07-overload-meltdowns-shutdowns', title: 'Chapter 7: Overload, meltdowns, and shutdowns', pages: 13 },
  { file: '08-mastering-the-pause', title: 'Chapter 8: Mastering the pause', pages: 11 },
  { file: '09-money', title: 'Chapter 9: Money', pages: 12 },
  { file: '10-feelings-have-names', title: 'Chapter 10: Feelings have names', pages: 13 },
  { file: '11-taking-care-of-your-body', title: 'Chapter 11: Taking care of your body', pages: 15, adult: true },
  { file: '12-learning-new-things', title: 'Chapter 12: Learning new things', pages: 12 },
  { file: '13-falling-forward', title: 'Chapter 13: Falling forward', pages: 11 },
  { file: '14-people-and-your-social-battery', title: 'Chapter 14: People and your social battery', pages: 11 },
  { file: '15-masking-and-speaking-up', title: 'Chapter 15: Masking and speaking up', pages: 11 },
  { file: '16-school-work-and-asking-for-help', title: 'Chapter 16: School, work, and asking for help', pages: 11 },
  { file: '17-family', title: 'Chapter 17: Family', pages: 14 },
  { file: '18-love-dating-and-your-body', title: 'Chapter 18: Love, dating, and your body', pages: 18, adult: true },
  { file: '19-putting-your-manual-together', title: 'Chapter 19: Putting your manual together', pages: 7 },
];

export default function DbtWorkbookWorksheetsPage() {
  return (
    <ClinicalShell title="Queer Pathways DBT Workbook: Free Worksheets by Chapter" description={description}>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <article className="border border-[#3E6830] bg-[#153009] p-6 sm:p-10">
          <header className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Free worksheets</p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-normal text-[#CBB26A] sm:text-4xl">DBT Workbook worksheets, by chapter</h1>
            <p className="text-lg font-medium leading-relaxed text-[#CBB26A]">
              One PDF for each chapter of the Queer Pathways DBT Workbook. Grab just the one you need tonight.
            </p>
          </header>

          <aside role="note" aria-label="Crisis support" className="mb-8 border-l-4 border-[#D3B127] bg-[#0A1D08] p-5 text-[#CCDEE0]">
            <p className="font-bold text-[#CBB26A]">If you are in danger right now, you do not need a worksheet first.</p>
            <p className="mt-2 leading-relaxed">
              Call <strong>911</strong>, or call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline (US and Canada), any time, day or night. You can also go to your nearest emergency room. Queer Pathways does not provide 24/7 crisis support.
            </p>
            <LgbtqCrisisLines />
          </aside>

          <p className="leading-relaxed text-[#C0BFBC]">
            These go with the chapters of the workbook. Each one has the examples from Alex, so you can see what a filled-in sheet might look like. Yours will look different, and that is the point. Skip any that don&rsquo;t fit. You can type into them on a screen, or print them and use a pen. Free, and no email needed. Want the short version of the chapters too? <a href="/resources/dbt-workbook" className="font-semibold text-[#D3B127] underline">Get the free TL;DR edition</a>.
          </p>

          <section className="my-8 border border-[#3E6830] bg-[#020501]/60 p-6 sm:p-8" aria-labelledby="download-heading">
            <h2 id="download-heading" className="mb-5 text-xl font-bold text-[#CBB26A]">Download a chapter</h2>
            <ul className="space-y-3">
              {chapters.map((chapter) => (
                <li key={chapter.file} className="text-[#C0BFBC]">
                  <a
                    href={`/downloads/dbt-worksheets/${chapter.file}.pdf`}
                    download={`Queer-Pathways-DBT-Worksheets-${chapter.file}.pdf`}
                    className="font-semibold text-[#D3B127] underline"
                  >
                    {chapter.title}
                  </a>{' '}
                  <span className="text-sm">
                    (PDF, {chapter.pages} pages{chapter.adult ? ', some worksheets marked 18+' : ''})
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="mt-10 border-t border-[#3E6830] pt-6 text-sm leading-relaxed text-[#C0BFBC]/75">
            <p>
              These worksheets are for education and self-reflection. Using them does not create a therapist-client relationship with Joshua Jonassaint, LCSW, or with Queer Pathways, and they do not replace individualized care. For 24/7 crisis support, call or text 988.
            </p>
          </aside>
        </article>
      </div>
    </ClinicalShell>
  );
}
