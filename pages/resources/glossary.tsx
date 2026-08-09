import { InteriorPage } from '../../components/InteriorPage';

export default function GlossaryPage() {
  return (
    <InteriorPage
      title="Queer Pathways Lexicon"
      description="A proprietary glossary for Somatic Sovereignty, the Internal Courtroom, Ambiguity Tax, and identity-fluent care."
      eyebrow="Proprietary lexicon hub"
      introduction="Language can reduce the cost of explaining a life. These terms name recurring structures without turning people into pathology."
      sections={[
        { title: 'Double-Outsider Synergy', body: <p>The compound perspective formed when multiple forms of nonconformity create insight, friction, and adaptive intelligence at the same time.</p> },
        { title: 'Internal Courtroom', body: <p>The self-prosecuting system that rehearses judgment, demands impossible evidence, and treats uncertainty as guilt.</p> },
        { title: 'Somatic Sovereignty', body: <p>The capacity to treat embodied signals, pacing, pleasure, consent, and limits as legitimate sources of knowledge.</p> },
        { title: 'Ambiguity Tax', body: <p>The executive and emotional cost of unclear expectations, hidden rules, delayed responses, and unresolved relational meaning.</p> },
        { title: 'Somatic Scaffolding', body: <p>External and relational supports that make regulation, initiation, sequencing, and recovery more available.</p> },
        { title: 'Identity-Fluent Care', body: <p>Care that understands identity and relationship structures without requiring foundational education from the client.</p> },
      ]}
    />
  );
}