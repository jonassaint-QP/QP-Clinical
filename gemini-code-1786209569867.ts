// components/IntakeSection.tsx
import React from 'react';

export const IntakeSection: React.FC = () => {
  const scrollToBookingWidget = () => {
    const widgetElement = document.getElementById('therapy-notes-widget');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intake-assessment" className="w-full bg-[#020501] py-16 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#CBB26A]">
          Ready to Adjourn Your Internal Courtroom?
        </h2>
        <p className="mb-8 text-[#C0BFBC]">
          Initiate your intake assessment below. To preserve practice sovereignty and telehealth safety, no physical addresses are recorded or displayed.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={scrollToBookingWidget}
          className="inline-block bg-[#D3B127] px-8 py-4 text-lg font-bold text-[#020501] transition-all duration-200 hover:bg-[#CBB26A] hover:shadow-[0_0_16px_rgba(203,178,106,0.4)]"
        >
          Adjourn the Courtroom — Book Your Intake Assessment
        </button>

        {/* Embedded TherapyNotes Scheduling Widget Base Frame */}
        <div
          id="therapy-notes-widget"
          className="mt-12 overflow-hidden border border-[#3E6830] bg-[#153009] p-2"
        >
          <iframe
            src="https://www.therapyportal.com/p/queercharts/"
            title="TherapyNotes Intake Booking Portal"
            className="h-[750px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};