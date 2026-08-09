import { InteriorPage } from '../components/InteriorPage';

export default function TorontoQueerTherapyPage() {
  return (
    <InteriorPage
      title="Queer Therapy Across Ontario"
      description="PHIPA-aligned telehealth for 2SLGBTQI+, non-binary, and neurodivergent adults located in Ontario."
      eyebrow="Ontario • RSW 842649"
      introduction="Identity-fluent telehealth for adults across Ontario navigating executive burnout, RSD, gender story integration, and relational complexity."
      sections={[
        { title: 'Ontario Scope', body: <p>Clinical services are available by encrypted telehealth to eligible clients physically located in Ontario at the time of care.</p> },
        { title: 'Dignity Investment', body: <p>Canadian coaching and autonomy blocks are billed in CAD. Clinical records remain isolated within the designated care environment.</p> },
      ]}
      note="Clinical availability depends on fit, registration scope, and the combined cross-jurisdiction capacity limit."
    />
  );
}