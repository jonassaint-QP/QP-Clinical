import Head from 'next/head';
import { ClinicalShell } from '../../components/ClinicalShell';
import { LgbtqCrisisLines } from '../../components/LgbtqCrisisLines';

const description =
  'A free, fillable safety plan from Queer Pathways. Write down your warning signs, coping steps, people, and crisis lines before a hard moment, so the plan is ready when you need it.';

const steps = [
  { title: 'My warning signs', body: 'The thoughts, feelings, body signs, or habits that tell you a hard time is starting.' },
  { title: 'Things I can do on my own', body: 'Small, doable moves that help you ride it out, plus the one you will default to when choosing feels impossible.' },
  { title: 'People and places that take my mind off it', body: 'Folks and spaces that help you feel less alone, even if you never talk about what is going on.' },
  { title: 'People I can ask for help', body: 'Chosen family, friends, partners. How to reach them, and what you actually want them to do.' },
  { title: 'Professionals and crisis lines', body: 'Your therapist, prescriber, after-hours line, nearest emergency room, and the crisis lines you trust.' },
  { title: 'Making my space safer', body: 'Concrete steps to put distance between you and the things that could hurt you, and who can help with that.' },
];

export default function SafetyPlanPage() {
  return (
    <ClinicalShell title="My Safety Plan: A Free, Fillable Worksheet" description={description}>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <article className="border border-[#3E6830] bg-[#153009] p-6 sm:p-10">
          <header className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Free worksheet</p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-normal text-[#CBB26A] sm:text-4xl">My Safety Plan</h1>
            <p className="text-lg font-medium leading-relaxed text-[#CBB26A]">
              A plan you make on a steadier day, for the days that are not. Fill it in, save it, and share it with the people you choose.
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
            When things get heavy, your brain is not at its best for problem-solving. That is not a personal failing, it is how stress works. A safety plan does the thinking ahead of time, in your own words, so you can follow it step by step instead of starting from scratch. Ours is based on the Stanley-Brown Safety Planning Intervention and adapted for queer lives: room for your name and pronouns, how you would rather be reached, and a code word or emoji that means &ldquo;check on me.&rdquo;
          </p>

          <section className="my-8 border border-[#3E6830] bg-[#020501]/60 p-6 sm:p-8" aria-labelledby="download-heading">
            <h2 id="download-heading" className="mb-3 text-xl font-bold text-[#CBB26A]">Get the safety plan</h2>
            <p className="mb-5 text-sm leading-relaxed text-[#C0BFBC]">
              A two-page fillable PDF. Type right into it on your phone or computer, or print it and use a pen. No email needed.
            </p>
            <a href="/downloads/my-safety-plan.pdf" download="My-Safety-Plan.pdf" className="btn-somatic-primary inline-block">
              Download My Safety Plan (PDF)
            </a>
          </section>

          <section aria-labelledby="inside-heading">
            <h2 id="inside-heading" className="mb-4 text-xl font-bold text-[#CBB26A]">What is inside</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step.title} className="text-[#C0BFBC]">
                  <span className="font-bold text-[#D3B127]">Step {index + 1}: {step.title}.</span> {step.body}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8" aria-labelledby="tips-heading">
            <h2 id="tips-heading" className="mb-4 text-xl font-bold text-[#CBB26A]">A few tips</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#C0BFBC]">
              <li>Fill it in when you feel relatively okay, ideally with your therapist or someone you trust.</li>
              <li>Keep it somewhere you can reach fast: your phone, your wallet, the fridge.</li>
              <li>Update it when your people, meds, or circumstances change. Plans are allowed to grow with you.</li>
              <li>Clients, bring it to session. We can build it or revise it together.</li>
            </ul>
          </section>

          <aside className="mt-10 border-t border-[#3E6830] pt-6 text-sm leading-relaxed text-[#C0BFBC]/75">
            <p>
              This worksheet is for education and self-reflection. Using it does not create a therapist-client relationship with Joshua Jonassaint, LCSW, or with Queer Pathways, and it does not replace individualized care. For 24/7 crisis support, call or text 988.
            </p>
          </aside>
        </article>
      </div>
    </ClinicalShell>
  );
}
