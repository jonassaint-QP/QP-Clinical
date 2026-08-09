import { InteriorPage } from '../components/InteriorPage';

export default function PrivacyPage() {
  return (
    <InteriorPage
      title="Notice of Privacy Practices"
      description="HIPAA and PHIPA privacy notice describing encrypted clinical records and strict clinical-to-retail data isolation."
      eyebrow="HIPAA • PHIPA • QP-POL-002"
      introduction="Clinical information belongs in the encrypted clinical environment. The public site and retail storefront are not channels for transmitting treatment information."
      sections={[
        { title: 'Clinical Records', body: <p>Clinical records are maintained within designated care systems and handled according to applicable Pennsylvania, United States, and Ontario privacy obligations.</p> },
        { title: 'Retail Isolation', body: <p>Clinical information is not sent to retail databases. Retail customer data is not entered into the electronic health record.</p> },
        { title: 'Website Data', body: <p>Routine hosting logs may process technical information needed for security and delivery. Do not place sensitive clinical details in general website or retail fields.</p> },
        { title: 'Privacy Requests', body: <p>Clients may use established secure clinical channels to ask about access, correction, restriction, or other applicable privacy rights.</p> },
      ]}
    />
  );
}