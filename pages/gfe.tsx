import { InteriorPage } from '../components/InteriorPage';

export default function GoodFaithEstimatePage() {
  return (
    <InteriorPage
      title="Notice of Good Faith Estimate & Reimbursement Architecture"
      description="No Surprises Act pricing and out-of-network reimbursement information for Queer Pathways clinical services."
      eyebrow="Under the US No Surprises Act"
      introduction="This notice explains your right to a Good Faith Estimate, the current Dignity Investment fee schedule, and reimbursement documentation available after payment."
      sections={[
        {
          title: 'Provider Information',
          body: (
            <div className="space-y-2">
              <p><strong>Provider NPI (Type 1):</strong> 1922592591</p>
              <p><strong>Aetna Provider PIN (PA):</strong> 6797426</p>
            </div>
          ),
        },
        {
          title: '1. Good Faith Estimate Standard (No Surprises Act)',
          body: <p>You have the right to receive a Good Faith Estimate explaining the total expected cost of your non-emergency health care items and services. Under federal law, health care providers must give patients who do not have insurance or who are not using insurance an estimate of the bill for medical items and services upon request and before scheduling.</p>,
        },
        {
          title: '2. Dignity Investment Fee Schedule (Locked Through March 30, 2027)',
          body: (
            <ul className="list-disc space-y-3 pl-5">
              <li><strong>Comprehensive Intake Assessment (The Sovereignty Foundry):</strong> $225 USD (90 minutes)</li>
              <li><strong>Individual Psychotherapy Session:</strong> $150 USD (50 minutes)</li>
              <li><strong>Relationship & Polycule Therapy:</strong> $200 USD (50 minutes)</li>
              <li><strong>Autonomy & Executive Coaching Masterclass:</strong> $150 USD (1 hour) / $200 USD (2 hours)</li>
            </ul>
          ),
        },
        {
          title: '3. Approved Out-of-Network Reimbursement Policy',
          body: (
            <div className="space-y-3">
              <p>For out-of-network PPO insurance plans in Pennsylvania, <strong>we issue itemized superbills and insurance-ready invoices directly upon payment, enabling seamless self-submission for out-of-network reimbursement</strong>.</p>
              <p>In Pennsylvania, in-network coverage is active for Aetna (PIN #6797426) and Highmark BCBS.</p>
            </div>
          ),
        },
      ]}
    />
  );
}