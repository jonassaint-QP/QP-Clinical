import { InteriorPage } from '../../components/InteriorPage';

export default function AdhdSurvivalGuidePage() {
  return (
    <InteriorPage
      title="ADHD Survival Guide"
      description="A practical neuro-sovereign guide for reducing executive load, RSD spirals, and the administrative tax of daily life."
      eyebrow="Neuro-sovereign resource"
      introduction="Survival is not a failed version of optimization. Start by reducing invisible decisions and building external structures that respect variable energy."
      sections={[
        { title: 'Lower the Activation Threshold', body: <p>Make the first action visible, physical, and small. Place tools where the task happens and define the next movement rather than the entire project.</p> },
        { title: 'Externalize Working Memory', body: <p>Use one trusted capture point, visible timers, body doubling, and short checklists. Memory support is infrastructure, not a moral concession.</p> },
        { title: 'Interrupt RSD Spirals', body: <p>Separate sensation, interpretation, and evidence. Delay irreversible replies while the nervous system is mobilized and seek context from a trusted person.</p> },
        { title: 'Build Recovery Into the Plan', body: <p>Transitions, sensory decompression, food, hydration, and sleep are part of task design. A plan that excludes recovery is not operationally complete.</p> },
      ]}
      note="This educational resource is not diagnosis, treatment, or emergency guidance."
    />
  );
}