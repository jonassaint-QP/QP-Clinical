import { InteriorPage } from '../../components/Interiorpage';

export default function ResourceLibraryPage() {
  return (
    <InteriorPage
      title="The Resource Library"
      description="Approved educational resources for neurodivergent and kink-fluent lives."
      eyebrow="Queer Pathways resource library"
      introduction="This curated set of approved educational resources and reflection tools is for 2SLGBTQI+ men, non-binary people, neurodivergent professionals, and anyone building a life with less translation."
      sections={[
        {
          title: 'Latest from the blog',
          body: (
            <div>
              <p className="text-xs font-bold uppercase text-[#D3B127]">September 6, 2026</p>
              <h3 className="mt-3 text-xl font-bold text-[#CBB26A]">Sunday Somatic Reset Note</h3>
              <p className="mt-3">Radical acceptance usually begins in an ugly little moment.</p>
              <a
                href="https://blog.queerpathways.org/sunday-somatic-reset-note/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-[#D3B127] underline"
              >
                Read the latest article
              </a>
            </div>
          ),
        },
        {
          title: 'Start with the current collection',
          body: (
            <ul className="space-y-5">
              <li>
                <a href="/resources/adhd-survival-card" className="font-bold text-[#D3B127] underline">The ADHD Survival Card</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">A scannable reference for the neurodivergent, kink-affirming, and chronically overstimulated.</p>
              </li>
              <li>
                <a href="/resources/thriving-ten-rules" className="font-bold text-[#D3B127] underline">Ten Rules for Thriving</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">Practical systems for Double-Outsider lives beyond moral effort.</p>
              </li>
              <li>
                <a href="/resources/glossary" className="font-bold text-[#D3B127] underline">Glossary of Terms of Art</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The shared language this practice works in, defined in plain terms.</p>
              </li>
              <li>
                <a href="/resources/adhd-survival-guide" className="font-bold text-[#D3B127] underline">ADHD Survival Guide</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The longer companion to the survival card.</p>
              </li>
              <li>
                <a href="/resources" className="font-bold text-[#D3B127] underline">Everything in the library</a>
                <p className="mt-1 text-sm text-[#C0BFBC]">The full set of resources, clinical notices and practice documents.</p>
              </li>
            </ul>
          ),
        },
        {
          title: 'New material is added only after review',
          body: (
            <p>Everything on this page is hosted here, on the practice's own domain. New material is added after its content and approval note are verified, and nothing is linked before that point.</p>
          ),
        },
      ]}
      note="This library is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}
