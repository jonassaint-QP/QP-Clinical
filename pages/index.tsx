// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import { LeavesSiteModal } from '../components/LeavesSiteModal';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToBookingWidget = () => {
    const widgetElement = document.getElementById('therapy-notes-widget');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirmRedirect = () => {
    setIsModalOpen(false);
    window.location.href = 'https://queerpathways.com';
  };

  return (
    <>
      <Head>
        <title>Queer Pathways | Somatic Telehealth for the Double-Outsider</title>
        <meta
          name="description"
          content="Cross-border somatic telehealth for neurodivergent, non-binary, and 2SLGBTQI+ professionals in Pennsylvania and Ontario."
        />
      </Head>

      <div className="min-h-screen bg-[#020501] text-[#C0BFBC] font-sans antialiased selection:bg-[#3E6830] selection:text-[#CCDEE0]">
        {/* Navigation Header */}
        <header className="sticky top-0 z-40 border-b border-[#3E6830] bg-[#153009]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-4">
            <span className="text-xl font-bold tracking-wider text-[#CBB26A]">
              QUEER PATHWAYS
            </span>
            <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
              <a href="/services" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Services</a>
              <a href="/philosophy" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Philosophy</a>
              <a href="/consultation" className="text-[#CCDEE0] transition-colors hover:text-[#CBB26A]">Peer Circle</a>
              <a href="/shop" onClick={handleShopClick} className="font-semibold text-[#D3B127] hover:underline">Storefront</a>
            </nav>
          </div>
        </header>

        {/* Hero Grounding Threshold */}
        <main className="mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="mb-8 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 text-left shadow-lg">
            <p className="text-lg italic text-[#CCDEE0]">
              "I tell myself I'm doing fine... but the truth is I'm not alright."
            </p>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#CBB26A] sm:text-5xl">
            SOMATIC SOVEREIGNTY FOR THE DOUBLE-OUTSIDER
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#C0BFBC]">
            We don't do sterile corporate wellness speak. We don't do clinical pathologizing. We build clinical architecture for survival, agency, and pleasure—specializing in 2SLGBTQI+ men, non-binary, and neurodivergent professionals navigating total identity-homelessness and chronic metabolic burnout across Pennsylvania and Ontario.
          </p>

          <div className="mb-8 inline-block border border-[#3E6830] bg-[#0A1D08] px-4 py-2.5 text-xs tracking-wide text-[#CBB26A]">
            Dual License: Joshua Jonassaint, LCSW CW023073 (PA) & RSW 842649 (ON) • Hard cap of 7 specialist slots total combined across Pennsylvania and Ontario • 7-Day Safety Net Active
          </div>

          <div>
            <button
              onClick={scrollToBookingWidget}
              className="inline-block border-0 bg-[#D3B127] px-8 py-4 text-lg font-bold text-[#020501] shadow-lg transition-all duration-200 hover:bg-[#CBB26A] hover:shadow-[0_0_16px_rgba(203,178,106,0.4)]"
            >
              Adjourn the Courtroom — Book Your Intake Assessment
            </button>
          </div>

          {/* Bespoke Standards of Care Cards */}
          <section className="my-16 grid gap-6 text-left md:grid-cols-3">
            <div className="border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-[#CBB26A]">Executive Burnout & RSD</h3>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">
                Somatic scaffolding engineered to regulate executive dysfunction and dismantle the Internal Auditor without forcing neuronormative masking.
              </p>
            </div>
            <div className="border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-[#CBB26A]">Relational Sovereignty</h3>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">
                Kink-fluent, poly-affirming, and attachment-focused therapy that eliminates the "Explanation Tax" for non-traditional relational architectures.
              </p>
            </div>
            <div className="border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-[#CBB26A]">Gender Story Prep</h3>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">
                Zero-gatekeeping medical navigation and narrative integration for trans, non-binary, and gender-expansive visionaries.
              </p>
            </div>
          </section>

          {/* Dignity Investment Pricing Section */}
          <section className="my-16 border border-[#3E6830] bg-[#153009] p-8 shadow-2xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#CBB26A]">
              DIGNITY INVESTMENT PRICING
            </h2>
            <p className="mb-6 text-center text-xs text-[#CCDEE0]">Rates locked through March 30, 2027</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h4 className="font-bold text-[#CBB26A]">Intake Assessment</h4>
                <span className="text-2xl font-extrabold text-[#D3B127]">$225</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">90 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h4 className="font-bold text-[#CBB26A]">Individual Therapy</h4>
                <span className="text-2xl font-extrabold text-[#D3B127]">$150</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">50 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h4 className="font-bold text-[#CBB26A]">Relationship Therapy</h4>
                <span className="text-2xl font-extrabold text-[#D3B127]">$200</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">50 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h4 className="font-bold text-[#CBB26A]">Coaching Masterclass</h4>
                <span className="text-2xl font-extrabold text-[#D3B127]">$150 / $200</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">1 Hr / 2 Hr (Billed in CAD for ON)</p>
              </div>
            </div>
          </section>

          {/* Base Booking Anchor Component */}
          <section id="therapy-notes-widget" className="mt-16 scroll-mt-24 border-t border-[#3E6830] pt-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#CBB26A]">
                Ready to Adjourn Your Internal Courtroom?
              </h2>
              <p className="mb-8 text-[#C0BFBC]">
                Initiate your intake assessment below. All client inquiries honor our 7-Day Safety Net guarantee across Pennsylvania and Ontario. To preserve practice sovereignty and telehealth safety, zero physical practice addresses are recorded or displayed.
              </p>
              <div className="border border-[#3E6830] bg-[#153009] px-6 py-10 shadow-2xl">
                <p className="mb-6 text-sm leading-relaxed text-[#CCDEE0]">
                  Continue to TherapyPortal to request your intake assessment in the secure clinical environment.
                </p>
                <a
                  href="https://www.therapyportal.com/p/queercharts/"
                  className="btn-somatic-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Secure Booking Portal
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer System with Strict Physical Address Exclusion */}
        <footer className="mt-20 border-t border-[#3E6830] bg-[#0A1D08] py-8 text-center text-xs text-[#C0BFBC]">
          <div className="mx-auto max-w-7xl px-4 space-y-3">
            <p className="text-[#CCDEE0]">
              Queer Pathways Telehealth • Dual Jurisdiction Pennsylvania (CW023073) & Ontario (RSW 842649)
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CBB26A]">
              <a href="/terms" className="hover:underline">Terms of Service</a>
              <a href="/privacy" className="hover:underline">Notice of Privacy Practices</a>
              <a href="/gfe" className="hover:underline">Good Faith Estimate</a>
              <a href="/phipa-addendum" className="hover:underline">PHIPA Addendum</a>
              <a href="/memoir-disclaimer" className="hover:underline">Memoir Disclaimer</a>
            </div>
            <nav aria-label="Resources" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[#CCDEE0]">
              <a href="/philly-queer-therapy" className="hover:text-[#CBB26A]">Pennsylvania</a>
              <a href="/toronto-queer-therapy" className="hover:text-[#CBB26A]">Ontario</a>
              <a href="/resources/adhd-survival-guide" className="hover:text-[#CBB26A]">ADHD Survival Guide</a>
              <a href="/resources/glossary" className="hover:text-[#CBB26A]">Glossary</a>
              <a href="/resources/thriving-ten-rules" className="hover:text-[#CBB26A]">The Thriving Ten</a>
            </nav>
            <p className="text-[10px] text-[#C0BFBC]/70">
              Operational Sovereignty Notice: Practice operates strictly via encrypted telehealth. Zero public physical practice addresses are maintained.
            </p>
          </div>
        </footer>

        {/* Security Gateway Modal */}
        <LeavesSiteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmRedirect}
        />
      </div>
    </>
  );
}