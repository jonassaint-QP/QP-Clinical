import { InteriorPage } from '../components/InteriorPage';

export default function PhipaAddendumPage() {
  return (
    <InteriorPage
      title="PHIPA Electronic Services Addendum"
      description="Ontario consent framework for electronic service providers and carefully bounded AI-assisted administrative tools."
      eyebrow="Ontario privacy framework"
      introduction="Ontario clinical information is handled under PHIPA-aligned controls, with explicit boundaries for electronic service providers and AI-assisted workflows."
      sections={[
        { title: 'Electronic Service Providers', body: <p>Vendors supporting secure communications, records, or telehealth are assessed for purpose limitation, access control, confidentiality, and appropriate contractual safeguards.</p> },
        { title: 'AI-Assisted Tools', body: <p>AI-assisted tools may support bounded administrative or drafting tasks only when authorized. They do not independently diagnose, decide treatment, or replace professional judgment.</p> },
        { title: 'Consent and Notice', body: <p>Where consent or additional notice is required, the purpose, information flow, alternatives, and withdrawal process are explained before use.</p> },
        { title: 'Human Accountability', body: <p>A responsible human reviews relevant outputs. Clinical accountability remains with the regulated professional, not the technology provider.</p> },
      ]}
    />
  );
}