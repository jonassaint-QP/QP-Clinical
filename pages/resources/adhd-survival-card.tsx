import Head from 'next/head';
import { useRouter } from 'next/router';
import { ClinicalShell } from '../../components/ClinicalShell';

const description = 'A scannable reference for neurodivergent, kink-affirming, and chronically overstimulated people, built on the Somatic Scaffolding framework.';

export default function AdhdSurvivalCardPage() {
  const router = useRouter();
  const submissionState = router.query.status;

  return (
    <ClinicalShell
      title="The ADHD Survival Card — Somatic Scaffolding for the Double-Outsider"
      description={description}
    >
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <article className="border border-[#3E6830] bg-[#153009] p-6 sm:p-10">
          <header className="mb-7">
            <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">Somatic scaffolding reference</p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-normal text-[#CBB26A] sm:text-4xl">
              The ADHD Survival Card — Somatic Scaffolding for the Double-Outsider
            </h1>
            <p className="text-lg font-medium leading-relaxed text-[#CBB26A]">
              A scannable reference for the neurodivergent, kink-affirming, and chronically overstimulated. Not a lecture. A toolkit you can actually keep on your desk.
            </p>
          </header>

          <p className="leading-relaxed text-[#C0BFBC]">
            Built from the Somatic Scaffolding and environmental design framework, this card front-loads the bullshit, rewards the hero, and gives your nervous system a set of anchors — from the Ten-Minute Cabin Anchor to the Erotic Dopamenu. It names the clinical allies who actually get it, and it lists the Dignity Investment rates plainly, because clarity is a form of care.
          </p>

          <section className="my-8 border border-[#3E6830] bg-[#020501]/60 p-6 sm:p-8" aria-labelledby="card-request-heading">
            <h2 id="card-request-heading" className="mb-5 text-xl font-bold text-[#CBB26A]">Get the survival card</h2>

            {submissionState === 'sent' ? (
              <p role="status" className="border-l-4 border-[#D3B127] bg-[#0A1D08] p-4 text-[#CCDEE0]">
                Check your inbox. Your ADHD Survival Card is on its way.
              </p>
            ) : (
              <form action="/api/lead-capture/adhd-survival-card" method="POST">
                <label htmlFor="email" className="mb-3 block font-semibold text-[#CBB26A]">
                  Drop your email. Take the card.
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your.email@domain.com"
                  required
                  className="mb-4 w-full border border-[#3E6830] bg-[#020501] px-4 py-3 text-base text-[#CCDEE0] placeholder:text-[#C0BFBC]/60 focus:border-[#CBB26A] focus:outline-none focus:ring-2 focus:ring-[#CBB26A]"
                />
                <label htmlFor="jurisdiction" className="mb-2 block font-semibold text-[#CBB26A]">
                  Where are you located?
                </label>
                <select
                  id="jurisdiction"
                  name="jurisdiction"
                  required
                  defaultValue=""
                  className="mb-4 w-full border border-[#3E6830] bg-[#020501] px-4 py-3 text-base text-[#CCDEE0] focus:border-[#CBB26A] focus:outline-none focus:ring-2 focus:ring-[#CBB26A]"
                >
                  <option value="" disabled>Select your region</option>
                  <option value="ontario">Ontario</option>
                  <option value="pennsylvania">Pennsylvania</option>
                  <option value="elsewhere">Elsewhere</option>
                </select>
                <label className="mb-5 flex items-start gap-3 text-sm leading-relaxed text-[#C0BFBC]">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#D3B127]"
                  />
                  <span>Send me the card and occasional Queer Pathways resource emails. I can unsubscribe at any time.</span>
                </label>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" className="btn-somatic-primary w-full">
                  Send Me the Card
                </button>
              </form>
            )}

            {submissionState === 'error' ? (
              <p role="alert" className="mt-4 text-sm text-[#CCDEE0]">
                We could not send the card just now. Please try again shortly.
              </p>
            ) : null}
          </section>

          <aside className="border-t border-[#3E6830] pt-6 text-sm leading-relaxed text-[#C0BFBC]/75">
            <p>
              <strong className="text-[#C0BFBC]">Compliance &amp; Memoir Disclaimer:</strong> This resource is for informational, educational, and narrative purposes only. Reading this card or utilizing these curated tools does not constitute or establish a formal therapist-client relationship with Joshua Jonassaint, RSW, LCSW, or with Queer Pathways. If you are navigating mental health concerns, trauma, or crisis, please seek individualized guidance from a licensed and qualified provider in your jurisdiction. For 24/7 crisis support, dial 988.
            </p>
          </aside>
        </article>
      </div>
    </ClinicalShell>
  );
}