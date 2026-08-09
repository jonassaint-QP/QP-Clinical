// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import { ClinicalShell } from '../components/ClinicalShell';

export default function LandingPage() {
  const scrollToBookingWidget = () => {
    const widgetElement = document.getElementById('therapy-notes-widget');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ClinicalShell
      title="Queer Pathways | Somatic Telehealth for the Double-Outsider"
      description="Cross-border somatic telehealth for neurodivergent, non-binary, and 2SLGBTQI+ professionals in Pennsylvania and Ontario."
    >
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/217059319_padded_logo.png"
              alt="Queer Pathways Gold Centaur Archer Logo"
              width={160}
              height={160}
              className="h-32 w-auto object-contain"
              priority
            />
          </div>
          <div className="mb-8 border-l-4 border-[#D3B127] bg-[#0A1D08] p-6 text-left shadow-lg">
            <p className="text-lg italic text-[#CCDEE0]">
              "Everyone thinks I'm doing fine... but the truth is I'm not alright."
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
              <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">Executive Burnout & RSD</h2>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">
                Somatic scaffolding engineered to regulate executive dysfunction and dismantle the Internal Auditor without forcing neuronormative masking.
              </p>
            </div>
            <div className="border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
              <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">Relational Sovereignty</h2>
              <p className="text-sm leading-relaxed text-[#C0BFBC]">
                Kink-fluent, poly-affirming, and attachment-focused therapy that eliminates the "Ambiguity Tax" for non-traditional relational architectures.
              </p>
            </div>
            <div className="border border-[#3E6830] bg-[#153009] p-6 shadow-xl">
              <h2 className="mb-3 text-xl font-bold text-[#CBB26A]">Gender Story Prep</h2>
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
                <h3 className="font-bold text-[#CBB26A]">Intake Assessment</h3>
                <span className="text-2xl font-extrabold text-[#D3B127]">$225</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">90 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h3 className="font-bold text-[#CBB26A]">Individual Therapy</h3>
                <span className="text-2xl font-extrabold text-[#D3B127]">$150</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">50 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h3 className="font-bold text-[#CBB26A]">Relationship Therapy</h3>
                <span className="text-2xl font-extrabold text-[#D3B127]">$200</span>
                <p className="mt-1 text-xs text-[#C0BFBC]">50 Minutes</p>
              </div>
              <div className="border border-[#3E6830] bg-[#0A1D08] p-6 text-center">
                <h3 className="font-bold text-[#CBB26A]">Coaching Masterclass</h3>
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
        </div>
    </ClinicalShell>
  );
}