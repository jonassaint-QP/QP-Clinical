import { InteriorPage } from '../components/InteriorPage';

export default function TermsPage() {
  return (
    <InteriorPage
      title="Queer Pathways LLC — Terms of Service & Clinical Scope"
      description="Terms governing Queer Pathways clinical information, telehealth access, jurisdiction boundaries, and the separate adult retail storefront."
      eyebrow="Effective August 12, 2026"
      introduction="These terms define the jurisdictional scope of Queer Pathways LLC's virtual clinical services, emergency limitations, and separation from the retail storefront."
      sections={[
        {
          title: 'Operating Entity & Contact',
          body: (
            <div className="space-y-2">
              <p><strong>Operating Entity:</strong> Queer Pathways LLC</p>
              <p><strong>Active Practice Phone:</strong> <a href="tel:+13655999002" className="text-[#D3B127] underline">+1 (365) 599-9002</a></p>
              <p><strong>Administrative Inquiries:</strong> <a href="mailto:jonassaint@queerpathways.org" className="text-[#D3B127] underline">jonassaint@queerpathways.org</a></p>
            </div>
          ),
        },
        {
          title: '1. Cross-Border Telehealth Jurisdictional Scope',
          body: <p>Telehealth psychotherapy, clinical consultation, and specialized mental health services provided through queerpathways.org are strictly limited to eligible clients who are <strong>physically located within the Commonwealth of Pennsylvania (United States) or the Province of Ontario (Canada) at the exact time of session delivery</strong>. Clinical care is delivered exclusively by Joshua Samuel Jonassaint, LCSW, RSW, under active credentials in Pennsylvania (Licensed Clinical Social Worker #CW023073) and Ontario (Registered Social Worker No. 842649).</p>,
        },
        {
          title: '2. Virtual Practice Sovereignty & Physical Address Protection',
          body: <p>Queer Pathways operates as a virtual-only telehealth practice. To preserve practice sovereignty, clinical licensing boundaries, and personal clinician safety, <strong>strictly zero physical practice addresses are displayed or maintained on public-facing web pages, footers, or metadata</strong>. All physical and administrative correspondence is handled through registered administrative routing nodes.</p>,
        },
        {
          title: '3. Emergency & Crisis Disclaimer',
          body: <p>Queer Pathways does not provide 24/7 emergency crisis intervention. If you are experiencing an acute life-threatening emergency, immediate risk of self-harm, or severe psychiatric distress, you must immediately contact emergency services (911 in the US and Canada), call or text the Suicide & Crisis Lifeline at <strong>988</strong>, or proceed to the nearest hospital emergency room.</p>,
        },
        {
          title: '4. Two-Lane Commercial & Clinical Separation (QP-POL-002)',
          body: <p>E-commerce hardware transactions executed via our retail storefront at queerpathways.com (Lane 1) operate under complete, firewalled database, merchant processor, and payment gateway isolation from our clinical electronic health records (EHR) and therapy billing system at queerpathways.org (Lane 2). Outbound clicks to retail offerings are intercepted to guarantee zero cross-lane Protected Health Information (PHI) or financial data transversal.</p>,
        },
      ]}
    />
  );
}