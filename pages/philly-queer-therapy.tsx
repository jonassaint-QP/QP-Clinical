import { InteriorPage } from '../components/InteriorPage';

export default function PhillyQueerTherapyPage() {
  return (
    <InteriorPage
      title="Queer Therapy Across Pennsylvania"
      description="Encrypted telehealth for 2SLGBTQI+, non-binary, and neurodivergent adults located in Pennsylvania."
      eyebrow="Pennsylvania • LCSW CW023073"
      introduction="Identity-fluent telehealth for adults across Pennsylvania navigating executive burnout, RSD, gender story integration, and relational complexity."
      sections={[
        { title: 'Pennsylvania Scope', body: <p>Clinical services are available by encrypted telehealth to eligible clients physically located in Pennsylvania at the time of care.</p> },
        { title: 'Specialist Pathways', body: <p>Care includes individual therapy, relationship therapy, intake assessment, and somatic scaffolding tailored to executive and sensory load.</p> },
      ]}
      note="Clinical availability depends on fit, licensure scope, and the combined cross-jurisdiction capacity limit."
    />
  );
}