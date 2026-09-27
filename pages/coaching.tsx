import { InteriorPage } from '../components/InteriorPage';

export default function CoachingPage() {
  return (
    <InteriorPage
      title="The Internal Courtroom Audit Masterclass"
      description="An out-of-pocket, non-clinical educational masterclass for debugging the executive scaffolding, self-advocacy and internal litigation that keep Double-Outsider professionals stuck."
      eyebrow="Educational framework — not clinical care"
      introduction="A structured working session for the part of your life that is not a diagnosis. We take the Internal Courtroom apart, find the garbage code running underneath it, and rebuild your executive scaffolding on purpose."
      showBookingCta={false}
      sections={[
        {
          title: 'What this is',
          body: (
            <p>An educational coaching framework delivered one-to-one or in small groups. We work on execution rather than on symptoms: a structured pass through the systems, scripts and self-advocacy habits that decide whether your capacity converts into output. Built for the person who has read everything, understands themselves well, and still cannot get the thing out the door.</p>
          ),
        },
        {
          title: 'What we debug together',
          body: (
            <ul className="space-y-3">
              <li><strong className="text-[#CCDEE0]">Garbage code:</strong> the inherited rules that fire before you have a chance to decide, and the audit that finds which ones are actually running the show.</li>
              <li><strong className="text-[#CCDEE0]">Executive scaffolding:</strong> the point-of-performance systems that hold under load, built for the way your brain actually processes rather than the way it is expected to.</li>
              <li><strong className="text-[#CCDEE0]">Self-advocacy:</strong> the scripts and boundary work for asking for what you need without paying the Ambiguity Tax for it.</li>
              <li><strong className="text-[#CCDEE0]">Internal litigation:</strong> the case you have been arguing against yourself, and the practical work of adjourning it.</li>
            </ul>
          ),
        },
        {
          title: 'What this is not',
          body: (
            <ul className="space-y-3">
              <li><strong className="text-[#CCDEE0]">Not therapy, and not a clinical service.</strong> The masterclass is educational. It does not diagnose, treat or assess any mental health condition.</li>
              <li><strong className="text-[#CCDEE0]">No treatment promises.</strong> No clinical outcome is offered or implied. Nothing here replaces individualised assessment by a qualified professional.</li>
              <li><strong className="text-[#CCDEE0]">No insurance, and no superbills.</strong> The masterclass is strictly out of pocket. It is not billable to insurance, and no superbill or reimbursement documentation is issued for it.</li>
              <li><strong className="text-[#CCDEE0]">No crisis role.</strong> This is not a crisis service and it does not provide 24/7 support. In an emergency, contact emergency services or your local crisis line.</li>
            </ul>
          ),
        },
        {
          title: 'Scope and availability',
          body: (
            <div className="space-y-3">
              <p><strong className="text-[#CCDEE0]">Clinical care is Pennsylvania-only.</strong> Psychotherapy, clinical consultation and intake through this practice are available exclusively to clients physically located in Pennsylvania at the time of service.</p>
              <p><strong className="text-[#CCDEE0]">The masterclass is different.</strong> Because it is educational rather than clinical, it is available across North America. It is delivered virtually and it works across time zones.</p>
              <p><strong className="text-[#CCDEE0]">Kept separate from the clinical lane.</strong> The masterclass runs in a separate track from therapy. Nothing discussed in a masterclass is entered into a clinical record, and no clinical service or therapeutic relationship is created by taking one.</p>
            </div>
          ),
        },
        {
          title: 'Investment',
          body: (
            <div className="space-y-3">
              <ul className="space-y-2">
                <li><strong className="text-[#CCDEE0]">$150</strong> — one hour session</li>
                <li><strong className="text-[#CCDEE0]">$200</strong> — two hour session</li>
              </ul>
              <p className="text-xs">Payable out of pocket. Fees are held through March 30, 2027.</p>
            </div>
          ),
        },
        {
          title: 'How to enquire',
          body: (
            <div className="space-y-3">
              <p>Send a short note describing what you want to work on and which session length you want. Availability is limited, and enquiries are answered in the order they arrive.</p>
              <a href="mailto:jonassaint@queerpathways.org" className="inline-block font-bold text-[#D3B127] hover:underline">Enquire about the masterclass</a>
            </div>
          ),
        },
      ]}
      note="The Internal Courtroom Audit Masterclass is an educational offering. It is not psychotherapy, it is not a substitute for clinical care, and it does not create a therapeutic relationship."
    />
  );
}
