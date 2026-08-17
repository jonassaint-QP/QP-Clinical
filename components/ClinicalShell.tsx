import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, type ReactNode, type MouseEvent } from 'react';
import { LeavesSiteModal } from './LeavesSiteModal';

interface ClinicalShellProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const defaultTitle = 'Queer Pathways | Somatic Telehealth for the Double-Outsider';
const defaultDescription = 'Cross-border somatic telehealth for neurodivergent, non-binary, and 2SLGBTQI+ professionals in Pennsylvania and Ontario.';

export function ClinicalShell({
  title = defaultTitle,
  description = defaultDescription,
  children,
}: ClinicalShellProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleShopClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmRedirect = () => {
    setIsModalOpen(false);
    window.open('https://queerpathways.com', '_blank', 'noopener,noreferrer');
  };

  const documentTitle = title.includes('Queer Pathways') ? title : `${title} | Queer Pathways`;
  const navigationClass = (pathname: string) =>
    `transition-colors hover:text-[#CBB26A] ${
      router.pathname === pathname ? 'font-bold text-[#CBB26A]' : 'text-[#CCDEE0]'
    }`;

  return (
    <div className="min-h-screen bg-[#020501] font-sans text-[#C0BFBC] antialiased selection:bg-[#3E6830] selection:text-[#CCDEE0]">
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#D3B127] focus:p-4 focus:font-bold focus:text-[#020501]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[#3E6830] bg-[#153009]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/images/217059319_padded_logo.png"
              alt="Queer Pathways Gold Centaur Archer Emblem"
              width={44}
              height={44}
              className="h-11 w-auto object-contain"
              priority
            />
            <span className="text-xl font-bold tracking-wider text-[#CBB26A]">QUEER PATHWAYS</span>
          </Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <Link href="/services" className={navigationClass('/services')} aria-current={router.pathname === '/services' ? 'page' : undefined}>Services</Link>
            <Link href="/philosophy" className={navigationClass('/philosophy')} aria-current={router.pathname === '/philosophy' ? 'page' : undefined}>Philosophy</Link>
            <Link href="/consultation" className={navigationClass('/consultation')} aria-current={router.pathname === '/consultation' ? 'page' : undefined}>Supervision</Link>
            <a
              href="https://blog.queerpathways.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]"
            >
              Blog
            </a>
            <a href="https://queerpathways.com" onClick={handleShopClick} className="font-semibold text-[#D3B127] transition-colors hover:underline">Storefront</a>
            <a
              href="https://www.therapyportal.com/p/queercharts/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none border border-[#CBB26A] bg-[#0A1D08] px-4 py-2 text-xs font-bold text-[#CBB26A] transition-all hover:bg-[#D3B127] hover:text-[#020501]"
            >
              Client Portal
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-[#3E6830] bg-[#0A1D08] py-8 text-center text-xs text-[#C0BFBC]">
        <div className="mx-auto max-w-7xl space-y-3 px-4">
          <p className="text-[#CCDEE0]">Queer Pathways Telehealth • Pennsylvania (CW023073) &amp; Ontario (RSW 842649)</p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CBB26A]">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="hover:underline">Notice of Privacy Practices</Link>
            <Link href="/gfe" className="hover:underline">Good Faith Estimate</Link>
            <Link href="/phipa-addendum" className="hover:underline">PHIPA Addendum</Link>
            <Link href="/memoir-disclaimer" className="hover:underline">Memoir Disclaimer</Link>
          </nav>
          <nav aria-label="Resources" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CCDEE0]">
            <Link href="/philly-queer-therapy" className="hover:text-[#CBB26A]">Pennsylvania</Link>
            <Link href="/toronto-queer-therapy" className="hover:text-[#CBB26A]">Ontario</Link>
            <Link href="/resources/adhd-survival-guide" className="hover:text-[#CBB26A]">ADHD Survival Guide</Link>
            <Link href="/resources/adhd-survival-card" className="hover:text-[#CBB26A]">ADHD Survival Card</Link>
            <Link href="/resources/glossary" className="hover:text-[#CBB26A]">Glossary</Link>
            <Link href="/resources/thriving-ten-rules" className="hover:text-[#CBB26A]">The Thriving Ten</Link>
          </nav>
          <p className="text-[10px] text-[#C0BFBC]/70">Operational Sovereignty Notice: Practice operates strictly via encrypted telehealth. Zero public physical practice addresses are maintained.</p>
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