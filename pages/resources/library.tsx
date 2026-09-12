import { InteriorPage } from '../../components/InteriorPage';

interface LibraryResource {
  title: string;
  description: string;
  href: string;
  verified: boolean;
  approvalNote: string;
}

/*
RESOURCE-MAPPING CONFIGURATION - not rendered until approved.
Each entry requires a title, a one-sentence audience-facing description, an
exact verified Google Drive share URL, an approval-gate note, and verified:
true. Filenames and links must come from Joshua's verified Drive inventory.
Unverified entries must never be linked or rendered.
*/
const libraryResources: LibraryResource[] = [];
const verifiedResources = libraryResources.filter((resource) => resource.verified);

export default function ResourceLibraryPage() {
  return (
    <InteriorPage
      title="The Resource Library"
      description="Approved educational resources for neurodivergent and kink-fluent lives."
      eyebrow="Queer Pathways resource library"
      introduction="This curated set of approved educational resources and reflection tools is for 2SLGBTQI+ men, non-binary people, neurodivergent professionals, and anyone building a life with less translation."
      sections={[
        {
          title: 'Start with the current collection',
          body: (
            <div>
              <a
                href="https://drive.google.com/drive/folders/1DazO387_aLXffQ1yOTJ4Q2nyIp-Brqpc?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open the Queer Pathways approved resource library in a new tab"
                className="block border border-[#CBB26A]/50 bg-[#0A1D08] p-6 hover:border-[#CBB26A]"
              >
                <p className="text-xs font-bold uppercase text-[#D3B127]">Google Drive folder</p>
                <h3 className="mt-3 text-xl font-bold text-[#CBB26A]">Joshua's approved resource library</h3>
                <p className="mt-3 text-sm text-[#C0BFBC]">Open the secure folder for the current collection of approved educational materials.</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase text-[#D3B127] underline decoration-[#CBB26A]/50 underline-offset-8">Open the Library</span>
                <p className="mt-4 text-xs text-[#C0BFBC]/70">You will be taken to a secure Google Drive folder. If a file asks for access, email jonassaint@queerpathways.org.</p>
              </a>
            </div>
          ),
        },
        {
          title: 'More resources are being curated',
          body: (
            <p>The Drive folder is the current source of approved materials. Additional files will appear here only after their exact links and approval notes are verified.</p>
          ),
        },
      ]}
      note="This library is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}