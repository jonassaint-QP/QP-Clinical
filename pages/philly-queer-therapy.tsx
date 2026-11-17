import { InteriorPage } from '../components/InteriorPage';

export default function PhillyQueerTherapyPage() {
  return (
    <InteriorPage
      title="LGBTQ+ Therapist in Philadelphia & Across Pennsylvania"
      description="Gay-affirming, LGBTQ+ telehealth therapy for adults in Philadelphia and anywhere in Pennsylvania. Individual and couples sessions with Joshua Jonassaint, LCSW. In-network with Aetna and Highmark BCBS."
      eyebrow="Pennsylvania • LCSW CW023073"
      introduction="Queer and gay-affirming telehealth for adults in Philadelphia, the surrounding counties, and across Pennsylvania navigating executive burnout, RSD, gender story integration, and relational complexity."
      sections={[
        { title: 'Philadelphia & Pennsylvania Scope', body: <p>Clinical services are available by encrypted telehealth to eligible clients physically located in Pennsylvania at the time of care, whether you are in Center City, the Gayborhood, South Philly, West Philly, Fishtown, the Main Line, Delaware, Bucks, or Montgomery County, or anywhere else in the state.</p> },
        { title: 'Specialist Pathways', body: <p>Care includes individual therapy for gay, bi, trans, and queer adults, couples and relationship therapy, intake assessment, and somatic scaffolding tailored to executive and sensory load.</p> },
      ]}
      note="In-network with Aetna and Highmark Blue Cross Blue Shield in Pennsylvania; superbills are provided for out-of-network plans. Clinical availability depends on fit, licensure scope, and the Pennsylvania capacity limit."
    />
  );
}
