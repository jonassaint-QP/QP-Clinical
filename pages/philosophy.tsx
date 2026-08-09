import { ClinicalShell } from '../components/ClinicalShell';

export default function PhilosophyPage() {
  const scrollToBookingWidget = () => {
    window.location.href = '/#therapy-notes-widget';
  };

  return (
    <ClinicalShell
      title="Philosophy | Queer Pathways — The Double-Outsider Framework"
      description="We don't believe in broken. Deconstructing the Internal Courtroom and reclaiming Somatic Sovereignty for queer and neurodivergent adults."
    >
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
            <ol className="space-y-4 text-sm text-[#C0BFBC]">
              <li><strong className="text-[#CCDEE0]">1. Scaffolding, not fixing:</strong> We do not believe your executive function needs correction. We build systems around your actual operating system.</li>
              <li><strong className="text-[#CCDEE0]">2. Relational sovereignty:</strong> Desire is not an edge case in this room. Kink, polyamory, non-monogamy, and your specific relational architecture are yours to design.</li>
              <li><strong className="text-[#CCDEE0]">3. Gender on your timeline:</strong> No required waiting periods. No gatekeeping. No proving you are trans enough.</li>
              <li><strong className="text-[#CCDEE0]">4. Trauma-informed by default:</strong> Not a checkbox or a wall certification. It is how we structure every session.</li>
            </ol>
          </div>
        </section>

        <div className="mt-12 text-center">
          <button type="button" onClick={scrollToBookingWidget} className="btn-somatic-primary text-lg">
            Adjourn the Courtroom — Book Your Intake Assessment
          </button>
        </div>
      </div>
    </ClinicalShell>
  );
}