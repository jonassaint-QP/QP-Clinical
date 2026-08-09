import { ClinicalShell } from '../components/ClinicalShell';

export default function SupervisionPage() {
  return (
    <ClinicalShell
      title="DBT Consultation Group & Supervision | Queer Pathways"
      description="Professional peer consultation and DBT training for licensed therapists working with 2SLGBTQI+ and neurodivergent adults across Pennsylvania and Ontario."
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#CBB26A] sm:text-4xl">SUPERVISION: THE DBT CONSULTATION GROUP</h1>
          <p className="mt-4 text-lg text-[#CCDEE0]">For licensed therapists who want to deepen their Dialectical Behavior Therapy practice in a space that understands queer and neurodivergent adults.</p>
        </div>

        <div className="mb-10 border border-[#3E6830] bg-[#153009] p-8 shadow-xl">
          <p className="text-base leading-relaxed text-[#C0BFBC]">This is not a beginner training. It is a rigorous consultation group for clinicians who want to refine their skills, sharpen case conceptualization, and work effectively with clients who have been failed by cookie-cutter modalities.</p>
        </div>

        <section className="space-y-8">
          <div className="border border-[#3E6830] bg-[#0A1D08] p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-[#CBB26A]">The Focus</h2>
            <p className="mb-4 text-sm text-[#C0BFBC]">We look past manualized rigidity and focus on the real-world friction of clinical practice with Double-Outsider clients.</p>
            <ul className="list-disc space-y-3 pl-5 text-sm text-[#C0BFBC] marker:text-[#D3B127]">
              <li>Adapting DBT and somatic frameworks for neurodivergent presentations, executive dysfunction, and masking burnout.</li>
              <li>Navigating complex intersectional dynamics, kink-fluent care, and relational diversity without pathologizing the client's life.</li>
              <li>Managing therapist burnout, secondary trauma, and the internal regulation required to hold high-acuity spaces.</li>
              <li>Case consultation and peer accountability rooted in non-judgmental, dialectical stances.</li>
            </ul>
          </div>

          <div className="border border-[#3E6830] bg-[#153009] p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-[#CBB26A]">Format & Investment</h2>
            <div className="grid gap-6 text-center sm:grid-cols-3">
              <div className="border border-[#3E6830] bg-[#0A1D08] p-4"><h3 className="text-sm font-bold text-[#CBB26A]">Group Format</h3><p className="mt-2 text-xs text-[#C0BFBC]">Live virtual consultation sessions for PA & ON clinicians</p></div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-4"><h3 className="text-sm font-bold text-[#CBB26A]">Investment</h3><p className="mt-2 text-xs font-bold text-[#D3B127]">$75 USD / $100 CAD per session</p></div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-4"><h3 className="text-sm font-bold text-[#CBB26A]">Eligibility</h3><p className="mt-2 text-xs text-[#C0BFBC]">Licensed external therapists seeking peer consultation</p></div>
            </div>
          </div>
        </section>

        <div className="mt-12 border-t border-[#3E6830] pt-8 text-center">
          <p className="mb-4 text-sm text-[#CCDEE0]">To join the consultation track, reach out directly to Joshua Jonassaint, LCSW, RSW:</p>
          <a href="mailto:Joshua@QueerPathways.org" className="btn-somatic-secondary inline-block font-bold">Contact Joshua@QueerPathways.org</a>
        </div>
      </div>
    </ClinicalShell>
  );
}