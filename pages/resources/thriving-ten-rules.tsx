import { InteriorPage } from '../../components/InteriorPage';

const rules = [
  'Regulation before optimization.',
  'Clarity is an access need.',
  'External support is real infrastructure.',
  'Recovery belongs inside the plan.',
  'Consent includes pace and sensory load.',
  'Pleasure is clinically relevant information.',
  'Masking costs count, even when performance looks strong.',
  'Ambiguity should be named, not personalized.',
  'Relationships need explicit architecture.',
  'Agency grows through repeatable choices, not punishment.',
];

export default function ThrivingTenRulesPage() {
  return (
    <InteriorPage
      title="The Thriving Ten"
      description="Ten neuro-sovereign operating rules for reducing ambiguity, protecting recovery, and building durable agency."
      eyebrow="Qualified resource corridor"
      introduction="These rules are a compact operating system for people whose competence has too often been purchased with masking, overextension, and private collapse."
      sections={rules.map((rule, index) => ({
        title: `Rule ${index + 1}`,
        body: <p>{rule}</p>,
      }))}
      note="Use the rules as reflection prompts. They are educational and do not replace individualized care."
    />
  );
}