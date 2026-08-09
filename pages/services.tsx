import { InteriorPage } from '../components/InteriorPage';

export default function ServicesPage() {
  return (
    <InteriorPage
      title="Specialist Scaffolding"
      description="Somatic, identity-fluent therapy pathways for neurodivergent and 2SLGBTQI+ adults across Pennsylvania and Ontario."
      eyebrow="Clinical pathways"
      introduction="Care is built around regulation, agency, and relational complexity without requiring neuronormative masking or an explanation tax."
      sections={[
        {
          title: 'Executive Burnout & RSD',
          body: <p>Somatic scaffolding for executive dysfunction, chronic metabolic burnout, and Rejection Sensitive Dysphoria. Individual therapy is $150 for 50 minutes.</p>,
        },
        {
          title: 'Relational Sovereignty',
          body: <p>Kink-fluent, poly-affirming, attachment-focused care for partners and relational systems. Relationship therapy is $200 for 50 minutes.</p>,
        },
        {
          title: 'Gender Story Prep',
          body: <p>Zero-gatekeeping narrative integration and medical-navigation preparation for trans, non-binary, and gender-expansive adults.</p>,
        },
        {
          title: 'Dignity Investment',
          body: <p>Intake assessments are $225 for 90 minutes. Coaching and autonomy blocks are $150 for one hour or $200 for two hours, billed in CAD for Canadian clients.</p>,
        },
      ]}
      note="Dignity Investment rates are locked through March 30, 2027."
    />
  );
}