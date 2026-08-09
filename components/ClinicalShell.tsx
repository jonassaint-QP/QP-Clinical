import Head from 'next/head';
import { useState, type ReactNode, type MouseEvent } from 'react';
import { LeavesSiteModal } from './LeavesSiteModal';

interface ClinicalShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ClinicalShell({ title, description, children }: ClinicalShellProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShopClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmRedirect = () => {
    setIsModalOpen(false);
    window.location.href = 'https://queerpathways.com';
  };

  return (
    <div className="min-h-screen bg-[#020501] font-sans text-[#C0BFBC] antialiased selection:bg-[#3E6830] selection:text-[#CCDEE0]">
      <Head>
        <title>{title} | Queer Pathways</title>
        <meta name="description" content={description} />
      </Head>

      <header className="sticky top-0 z-40 border-b border-[#3E6830] bg-[#153009]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
          <a href="/" className="text-xl font-bold tracking-wider text-[#CBB26A]">
            QUEER PATHWAYS
          </a>
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="/services" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Services</a>
            <a href="/philosophy" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Philosophy</a>
            <a href="/consultation" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Peer Circle</a>
            <a href="/shop" onClick={handleShopClick} className="font-semibold text-[#D3B127] hover:underline">Storefront</a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-[#3E6830] bg-[#0A1D08] py-8 text-center text-xs text-[#C0BFBC]">
        <div className="mx-auto max-w-7xl space-y-3 px-4">
          <p className="text-[#CCDEE0]">Queer Pathways Telehealth • Pennsylvania (CW023073) &amp; Ontario (RSW 842649)</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CBB26A]">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Notice of Privacy Practices</a>
            <a href="/gfe" className="hover:underline">Good Faith Estimate</a>
            <a href="/phipa-addendum" className="hover:underline">PHIPA Addendum</a>
            <a href="/memoir-disclaimer" className="hover:underline">Memoir Disclaimer</a>
          </nav>
          <nav aria-label="Resources" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CCDEE0]">
            <a href="/philly-queer-therapy" className="hover:text-[#CBB26A]">Pennsylvania</a>
            <a href="/toronto-queer-therapy" className="hover:text-[#CBB26A]">Ontario</a>
            <a href="/resources/adhd-survival-guide" className="hover:text-[#CBB26A]">ADHD Survival Guide</a>
            <a href="/resources/glossary" className="hover:text-[#CBB26A]">Glossary</a>
            <a href="/resources/thriving-ten-rules" className="hover:text-[#CBB26A]">The Thriving Ten</a>
          </nav>
          <p className="text-[10px] text-[#C0BFBC]/70">Encrypted telehealth only. No public physical practice address is maintained.</p>
        </div>
      </footer>

      <LeavesSiteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRedirect}
      />
    </div>
  );
}