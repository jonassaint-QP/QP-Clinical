import { InteriorPage } from '../components/InteriorPage';

export default function TermsPage() {
  return (
    <InteriorPage
      title="Terms of Service"
      description="Terms governing Queer Pathways clinical information, telehealth access, jurisdiction boundaries, and the separate adult retail storefront."
      eyebrow="Effective August 8, 2026"
      introduction="These terms distinguish the clinical portal from the independently operated retail storefront and define the boundaries of public website use."
      sections={[
        { title: 'Clinical Jurisdictions', body: <p>Clinical services are limited to eligible clients located in Pennsylvania or Ontario when care is delivered. Website content does not establish a therapeutic relationship.</p> },
        { title: 'Emergencies', body: <p>This website and its forms are not emergency services. In an emergency, contact local emergency services or an appropriate crisis resource in your location.</p> },
        { title: 'Adult Retail Boundary', body: <p>The retail storefront is separate from clinical operations and is intended only for adults aged 18 or older. Retail browsing and purchases do not create a clinical relationship.</p> },
        { title: 'Acceptable Use', body: <p>Do not misuse the website, attempt unauthorized access, interfere with operation, or submit clinical information through retail systems.</p> },
      ]}
      note="Retail and clinical data systems, payment lanes, and records remain strictly separated under QP-POL-002."
    />
  );
}