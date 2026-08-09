import { InteriorPage } from '../components/InteriorPage';

export default function GoodFaithEstimatePage() {
  return (
    <InteriorPage
      title="Good Faith Estimate"
      description="No Surprises Act pricing information for Queer Pathways intake, individual therapy, and relationship therapy."
      eyebrow="No Surprises Act"
      introduction="Clients who are uninsured or not using insurance may request a written estimate of reasonably expected charges before scheduled care."
      sections={[
        { title: 'Intake Assessment', body: <p>$225 for 90 minutes.</p> },
        { title: 'Individual Therapy', body: <p>$150 for 50 minutes.</p> },
        { title: 'Relationship Therapy', body: <p>$200 for 50 minutes.</p> },
        { title: 'Estimate Scope', body: <p>The total depends on the number and type of services chosen. A Good Faith Estimate is not a contract and may change when care needs change.</p> },
      ]}
      note="Dignity Investment rates are locked through March 30, 2027. If billed charges substantially exceed a written estimate, federal dispute rights may apply."
    />
  );
}