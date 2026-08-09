import { ClinicalShell } from '../components/ClinicalShell';

export default function ServicesPage() {
  const scrollToBookingWidget = () => {
    window.location.href = '/#therapy-notes-widget';
  };

  return (
    <ClinicalShell
      title="Services & Pricing | Queer Pathways — Specialist Scaffolding"
      description="Three pathways grounded in identity-fluent, kink-fluent, and neuro-affirming clinical scaffolding across Pennsylvania and Ontario."
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#CBB26A] sm:text-5xl">THREE PATHWAYS. ONE RADICAL PREMISE.</h1>
          <p className="mt-4 text-lg text-[#CCDEE0]">Your identity is not a problem to be managed. We build clinical care around the architecture you already have.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <section className="flex flex-col justify-between border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">1. Specialist Scaffolding</h2>
            <p className="mb-4 text-xs font-semibold text-[#D3B127]">For the ADHD or Autistic Brain Running on Cognitive Friction</p>
            <p className="text-sm leading-relaxed text-[#C0BFBC]">You have the intelligence and drive. What you need is a system that fits how your brain processes. We map executive function at the point of performance, address RSD as a nervous-system pattern, and execute cognitive-load audits.</p>
          </section>
          <section className="flex flex-col justify-between border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">2. Relational Sovereignty</h2>
            <p className="mb-4 text-xs font-semibold text-[#D3B127]">Kink, Polyamory, Attachment Repair & Desire</p>
            <p className="text-sm leading-relaxed text-[#C0BFBC]">Non-monogamy and kink are not disclosures here; they are data. Kink-fluent care with zero Ambiguity Tax, polyamory and NRE management, attachment repair for the multiply relational brain, and sex therapy for queer bodies.</p>
          </section>
          <section className="flex flex-col justify-between border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
            <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">3. Gender Story Prep</h2>
            <p className="mb-4 text-xs font-semibold text-[#D3B127]">Transition Support with Zero Gatekeeping</p>
            <p className="text-sm leading-relaxed text-[#C0BFBC]">No required regret waiting periods. No proving you are trans enough. We help you articulate your gender story, provide pre-transition exploration, offer readiness letters from an affirming stance, and support post-transition narrative integration.</p>
          </section>
        </div>

        <section className="my-16 border border-[#3E6830] bg-[#153009] p-8 shadow-2xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-[#CBB26A]">DIGNITY INVESTMENT PRICING</h2>
          <p className="mb-8 text-center text-xs text-[#CCDEE0]">Locked through March 30, 2027 • Practice Coordinates: +1 (365) 599-9002</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Intake Assessment', '$225', '90 Minutes'],
              ['Individual Therapy', '$150', '50 Minutes'],
              ['Relationship Therapy', '$200', '50 Minutes'],
              ['Coaching Masterclass', '$150 / $200', '1 Hr / 2 Hr (Billed in CAD for ON)'],
            ].map(([name, price, duration]) => (
              <div key={name} className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h3 className="font-bold text-[#CBB26A]">{name}</h3>
                <span className="text-2xl font-extrabold text-[#D3B127]">{price}</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">{duration}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-2 border-t border-[#3E6830] pt-6 text-xs text-[#C0BFBC]">
            <p><strong className="text-[#CBB26A]">Insurance & Coverage:</strong> Direct superbill and invoice generation for client self-submission. In Ontario, RSW receipts may support reimbursement through Sun Life, Manulife, Canada Life, and Desjardins. In Pennsylvania, active in-network care is maintained with Aetna, Highmark BCBS, and Cigna via TherapyNotes.</p>
          </div>
        </section>

        <div className="text-center">
          <button type="button" onClick={scrollToBookingWidget} className="btn-somatic-primary text-lg">
            Adjourn the Courtroom — Book Your Intake Assessment
          </button>
        </div>
      </div>
    </ClinicalShell>
  );
}