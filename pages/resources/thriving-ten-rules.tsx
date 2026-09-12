import { InteriorPage } from '../../components/InteriorPage';

const rules = [
{ number: '01', title: 'Externalize Everything', description: 'Your Brain Is for Ideas, Not Storage.', mantra: 'I do not trust my memory; I trust my system.' },
{ number: '02', title: 'Break It Down', description: 'The Art of the Micro-Yes.', mantra: 'I can do anything for five minutes.' },
{ number: '03', title: 'Master the Pause', description: 'The Space Between Stimulus and Response Is Where Your Freedom Lives.', mantra: 'Wait. Watch. Then move.' },
{ number: '04', title: 'Engineer Your Environment for Your Brain', description: 'Fix your space, not yourself.', mantra: 'Design for the brain you have, not the brain you want.' },
{ number: '05', title: 'Find Your Flow with Dopamine', description: 'Interest is fuel; use it intentionally.', mantra: 'Chase the spark, but hold the leash.' },
{ number: '06', title: 'Find Your Double', description: 'Body doubling and co-regulation reduce friction.', mantra: 'I do not have to do it alone.' },
{ number: '07', title: 'Connect Authentically', description: 'Choose vulnerability over performance.', mantra: 'Real over performative.' },
{ number: '08', title: 'Move Your Body', description: 'Somatic movement can shift emotional intensity.', mantra: 'Motion changes emotion.' },
{ number: '09', title: 'Eat the Frog, Reward the Hero', description: 'Pair difficult action with immediate reinforcement.', mantra: 'First the sweat, then the sweet.' },
{ number: '10', title: 'Practice Self-Compassion', description: 'Become your own Defense Attorney instead of joining the Internal Prosecutor.', mantra: 'I am doing the best I can, and I am allowed to be kind.' },
];

export default function ThrivingTenRulesPage() {
  return (
    <InteriorPage
      title="Ten Rules for Thriving"
      description="Identity-fluent rules for a brain beyond moral effort."
      eyebrow="Operating manual"
      introduction="Practical systems for neurodivergent and Double-Outsider lives, not a test of moral effort. These rules draw from DBT-informed skills, EFT-informed relational awareness, Somatic Scaffolding, and Identity-Fluent practice. They make room for Somatic Sovereignty and name the Ambiguity Tax where useful."
      sections={rules.map((rule) => ({
        title: `Rule ${rule.number} - ${rule.title}`,
        body: (
          <div>
            <p>{rule.description}</p>
            <p className="mt-3 font-semibold text-[#CBB26A]">Mantra: {rule.mantra}</p>
          </div>
        ),
      }))}
      note="This page is educational and reflection-oriented. It does not replace individualized care."
    />
  );
}