import { InteriorPage } from '../../components/InteriorPage';
import Link from 'next/link';

const resources = [
{ title: 'The ADHD Survival Card', description: 'A scannable reference for the neurodivergent, kink-affirming, and chronically overstimulated.', href: '/resources/adhd-survival-card', label: 'Downloadable reference' },
{ title: 'The Thriving Ten', description: 'Practical systems for Double-Outsider lives beyond moral effort.', href: '/resources/thriving-ten-rules', label: 'Practice framework' },
{ title: 'Good Faith Estimate', description: 'The current fee schedule, reimbursement architecture, and Good Faith Estimate notice.', href: '/gfe', label: 'Clinical and billing notice' },
{ title: 'Terms of Service', description: 'The practice telehealth scope, emergency limitations, and clinical boundaries.', href: '/terms', label: 'Practice terms' },
{ title: 'Notice of Privacy Practices', description: 'How clinical information and website data are handled across the practice care systems.', href: '/privacy', label: 'Privacy notice' },
];

export default function ResourcesIndexPage() {
  return (
    <InteriorPage
      title="Useful things to keep close."
      description="A practical library of Queer Pathways resources, clinical notices, and somatic scaffolding tools."
      eyebrow="Queer Pathways resource library"
      introduction="A small library for the work of making life more legible: practical scaffolding, clear practice notices, and language that respects your existing architecture."
      sections={resources.map((resource) => ({
        title: resource.title,
        body: (
          <div>
            <p>{resource.description}</p>
            <Link href={resource.href} className="mt-3 inline-block font-bold text-[#D3B127] hover:underline">Open resource</Link>
          </div>
        ),
      }))}
    />
  );
}