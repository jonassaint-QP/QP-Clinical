// LGBTQ+ crisis and support lines shown on the Library and the safety plan page.
// Numbers, hours and eligibility were checked on each organization's own site
// on 2026-11-20. Re-check them before editing: these services change.
//   988 Press 3 / PRIDE: https://988lifeline.org/get-help/what-to-expect/ (restored Sept 30, 2026)
//   Trevor Project: https://www.thetrevorproject.org/get-help/
//   Trans Lifeline: https://translifeline.org/hotline/
//   LGBT National Hotline: https://lgbthotline.org/national-hotline/

import type { ReactNode } from 'react';

interface CrisisLine {
  name: string;
  who: string;
  reach: ReactNode;
  when: string;
  url: string;
}

const linkClass = 'whitespace-nowrap font-bold text-[#D3B127] underline';

const lines: CrisisLine[] = [
  {
    name: '988 LGBTQ+ youth line',
    who: 'For LGBTQ+ young people, with counselors trained for queer and trans lives.',
    reach: (
      <>
        Call <a href="tel:988" className={linkClass}>988</a> and press <strong>3</strong>, or text <strong>PRIDE</strong> to <a href="sms:988" className={linkClass}>988</a>.
      </>
    ),
    when: '24/7',
    url: 'https://988lifeline.org/',
  },
  {
    name: 'The Trevor Project',
    who: 'Free, confidential crisis counseling for LGBTQ+ young people, anywhere in the US.',
    reach: (
      <>
        Call <a href="tel:+18664887386" className={linkClass}>1-866-488-7386</a>, text <strong>START</strong> to <a href="sms:678678" className={linkClass}>678-678</a>, or chat online.
      </>
    ),
    when: '24/7',
    url: 'https://www.thetrevorproject.org/get-help/',
  },
  {
    name: 'Trans Lifeline',
    who: 'Peer support run by trans people for trans and questioning folks. They will not call 911 or police without your explicit OK.',
    reach: (
      <>
        US <a href="tel:+18775658860" className={linkClass}>877-565-8860</a>, Canada <a href="tel:+18773306366" className={linkClass}>877-330-6366</a>. Press 2 for Spanish.
      </>
    ),
    when: 'Monday to Friday, 1 to 9 PM Eastern',
    url: 'https://translifeline.org/hotline/',
  },
  {
    name: 'LGBT National Hotline',
    who: 'Confidential peer support for LGBTQ+ people of any age, from coming out to relationships to just needing someone who gets it. They do not call 911 on your behalf.',
    reach: (
      <>
        Call <a href="tel:+18888434564" className={linkClass}>888-843-4564</a>, or use their online peer chat.
      </>
    ),
    when: 'Monday to Friday, 4 PM to midnight Eastern; Saturday, noon to 5 PM Eastern',
    url: 'https://lgbthotline.org/national-hotline/',
  },
];

export function LgbtqCrisisLines({ headingClassName = 'font-bold text-[#CBB26A]' }: { headingClassName?: string }) {
  return (
    <div className="mt-4">
      <p className={headingClassName}>LGBTQ+ crisis and support lines</p>
      <p className="mt-1 text-sm">Sometimes you want to talk to someone who already gets it. These lines are built for LGBTQ+ folks, and several are staffed by our own community.</p>
      <ul className="mt-3 space-y-3">
        {lines.map((line) => (
          <li key={line.name} className="border-l-2 border-[#3E6830] pl-3">
            <a href={line.url} className={linkClass} target="_blank" rel="noopener noreferrer">{line.name}</a>
            <p className="mt-1 text-sm">{line.reach}</p>
            <p className="mt-1 text-sm text-[#C0BFBC]">{line.who} Hours: {line.when}.</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-[#C0BFBC]">Lines that are not open 24/7 are for support, not emergencies. If you are in danger right now, call 911 or 988.</p>
    </div>
  );
}
