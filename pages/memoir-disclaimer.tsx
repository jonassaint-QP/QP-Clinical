import { InteriorPage } from '../components/InteriorPage';

export default function MemoirDisclaimerPage() {
  return (
    <InteriorPage
      title="Memoir and AI-Assisted Drafting Disclaimer"
      description="Disclaimer for memoir, educational, and AI-assisted drafting materials published by Queer Pathways."
      eyebrow="Editorial accountability"
      introduction="Memoir and educational writing reflects situated experience and is not individualized clinical, legal, financial, or medical advice."
      sections={[
        { title: 'AI-Assisted Drafting', body: <p>Some material may use AI-assisted drafting or editing. A human author remains responsible for review, context, corrections, and publication decisions.</p> },
        { title: 'Composite and Altered Details', body: <p>Names, identifying details, chronology, or circumstances may be changed or combined to protect privacy and communicate a broader truth.</p> },
        { title: 'No Clinical Relationship', body: <p>Reading or responding to published material does not create a therapeutic relationship or replace assessment by a qualified professional.</p> },
        { title: 'Limitations', body: <p>Automated systems can produce incomplete or inaccurate language. Readers should not rely on generated or editorial material as a substitute for professional advice.</p> },
      ]}
    />
  );
}