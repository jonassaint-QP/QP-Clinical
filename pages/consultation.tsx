import { InteriorPage } from '../components/InteriorPage';

export default function ConsultationPage() {
  return (
    <InteriorPage
      title="Peer Circle Consultation"
      description="Specialized consultation for independently licensed therapists serving queer, trans, neurodivergent, kink, and polyamorous communities."
      eyebrow="For licensed clinicians"
      introduction="A focused peer circle for external licensed therapists who want rigorous case reflection without flattening identity, relationship structure, or nervous-system context."
      sections={[
        { title: 'Clinical Reflection', body: <p>Examine countertransference, ambiguity, complex attachment patterns, and the pressure to translate non-normative lives into conventional clinical language.</p> },
        { title: 'Identity-Fluent Practice', body: <p>Strengthen queer, trans, neurodivergent, kink-fluent, and poly-affirming practice while maintaining scope, documentation discipline, and informed consent.</p> },
        { title: 'Somatic Case Formulation', body: <p>Develop formulations that include autonomic state, sensory gating, executive load, masking, and relational safety.</p> },
        { title: 'Professional Boundaries', body: <p>Consultation supports professional development and is not supervision, legal advice, emergency coverage, or a substitute for jurisdiction-specific obligations.</p> },
      ]}
      note="Participation is limited to independently licensed mental health professionals."
    />
  );
}