import type { ReactNode } from 'react';
import { ClinicalShell } from './ClinicalShell';

interface Section {
  title: string;
  body: ReactNode;
}

interface InteriorPageProps {
  title: string;
  description: string;
  eyebrow: string;
  introduction: string;
  sections: Section[];
  note?: string;
}

export function InteriorPage({
  title,
  description,
  eyebrow,
  introduction,
  sections,
  note,
}: InteriorPageProps) {
  return (
    <ClinicalShell title={title} description={description}>
      <main className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <header className="mb-12 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase text-[#D3B127]">{eyebrow}</p>
          <h1 className="mb-5 text-3xl font-extrabold tracking-normal text-[#CBB26A] sm:text-4xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#C0BFBC]">{introduction}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="somatic-card">
              <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">{section.title}</h2>
              <div className="text-sm leading-relaxed text-[#C0BFBC]">{section.body}</div>
            </section>
          ))}
        </div>

        {note ? <p className="mt-8 border border-[#3E6830] bg-[#0A1D08] p-5 text-sm text-[#CCDEE0]">{note}</p> : null}

        <aside className="mt-12 border-t border-[#3E6830] pt-10 text-center">
          <p className="mb-3 text-sm font-bold text-[#D3B127]">Hard cap of 7 specialist slots total combined across Pennsylvania and Ontario.</p>
          <p className="mb-6 text-sm text-[#C0BFBC]">Initial consultation pathways are offered within seven business days of inquiry, subject to jurisdiction and clinical fit.</p>
          <a href="/#therapy-notes-widget" className="btn-somatic-primary">
            Adjourn the Courtroom — Book Your Intake Assessment
          </a>
        </aside>
      </main>
    </ClinicalShell>
  );
}