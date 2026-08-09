import { InteriorPage } from '../components/InteriorPage';

export default function PhilosophyPage() {
  return (
    <InteriorPage
      title="The Sovereignty Foundry"
      description="The Queer Pathways philosophy of Somatic Sovereignty, Internal Courtroom work, Polyvagal theory, and Centaur Architecture."
      eyebrow="Clinical philosophy"
      introduction="The work begins by replacing self-prosecution with body-level evidence, durable agency, and a nervous system that no longer has to plead its case."
      sections={[
        { title: 'The Internal Courtroom', body: <p>The Internal Courtroom names the exhausting cycle of self-surveillance, anticipated rejection, and constant preparation for judgment. Therapy helps adjourn that proceeding.</p> },
        { title: 'Somatic Sovereignty', body: <p>Somatic Sovereignty treats sensation, pacing, consent, and embodied knowledge as essential information rather than obstacles to be overruled.</p> },
        { title: 'Polyvagal Theory', body: <p>Polyvagal-informed work builds practical awareness of mobilization, shutdown, connection, and the conditions that support flexible regulation.</p> },
        { title: 'Centaur Architecture', body: <p>Centaur Architecture joins human judgment with carefully bounded tools. Technology may support reflection, but never replaces clinical accountability, consent, or relationship.</p> },
      ]}
    />
  );
}