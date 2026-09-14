import { InteriorPage } from '../components/InteriorPage';

export default function PrivacyPage() {
  return (
    <InteriorPage
      title="Notice of Privacy Practices"
      description="HIPAA and PHIPA privacy notice describing encrypted clinical records and strict clinical-to-retail data isolation."
      eyebrow="HIPAA • PHIPA • QP-POL-002"
      introduction="Clinical information belongs in the encrypted clinical environment. The public site and retail storefront are not channels for transmitting treatment information."
      sections={[
        { title: 'Practice Contact', body: <p><strong>Active Practice Phone:</strong> <a href="tel:+13655999002" className="text-[#D3B127] underline">+1 (365) 599-9002</a></p> },
        { title: 'Clinical Records', body: <p>Clinical records are maintained within designated care systems and handled according to applicable Pennsylvania, United States, and Ontario privacy obligations.</p> },
        { title: 'Retail Isolation', body: <p>Clinical information is not sent to retail databases. Retail customer data is not entered into the electronic health record.</p> },
        { title: 'Website Data', body: <p>Routine hosting logs may process technical information needed for security and delivery. Do not place sensitive clinical details in general website or retail fields.</p> },
        { title: 'Out-of-Network Reimbursement', body: <p>For all out-of-network PPO insurance plans across Pennsylvania and Ontario, we issue itemized superbills and insurance-ready invoices directly upon payment, enabling seamless self-submission for out-of-network reimbursement. Third-party administrative claim platforms have been completely decommissioned.</p> },
        { title: 'Privacy Requests', body: <p>Clients may use established secure clinical channels to ask about access, correction, restriction, or other applicable privacy rights.</p> },
      ]}
    />
  );
}