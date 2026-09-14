import { InteriorPage } from '../components/InteriorPage';

export default function PhipaAddendumPage() {
  return (
    <InteriorPage
      title="PHIPA Electronic Services Addendum"
      description="Ontario consent framework for electronic service providers and carefully bounded AI-assisted administrative tools."
      eyebrow="Ontario privacy framework"
      introduction="Ontario clinical information is handled under PHIPA-aligned controls, with explicit boundaries for electronic service providers and AI-assisted workflows."
      sections={[
        { title: 'Practice Contact', body: <p><strong>Active Practice Phone:</strong> <a href="tel:+13655999002" className="text-[#D3B127] underline">+1 (365) 599-9002</a></p> },
        { title: 'Electronic Service Providers', body: <p>Vendors supporting secure communications, records, or telehealth are assessed for purpose limitation, access control, confidentiality, and appropriate contractual safeguards.</p> },
        { title: 'AI-Assisted Tools', body: <p>AI-assisted tools may support bounded administrative or drafting tasks only when authorized. They do not independently diagnose, decide treatment, or replace professional judgment.</p> },
        { title: 'Consent and Notice', body: <p>Where consent or additional notice is required, the purpose, information flow, alternatives, and withdrawal process are explained before use.</p> },
        { title: 'Out-of-Network Reimbursement', body: <p>For all out-of-network PPO insurance plans across Pennsylvania and Ontario, we issue itemized superbills and insurance-ready invoices directly upon payment, enabling seamless self-submission for out-of-network reimbursement. Third-party administrative claim platforms have been completely decommissioned.</p> },
        { title: 'Human Accountability', body: <p>A responsible human reviews relevant outputs. Clinical accountability remains with the regulated professional, not the technology provider.</p> },
      ]}
    />
  );
}