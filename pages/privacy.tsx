import { InteriorPage } from '../components/InteriorPage';

export default function PrivacyPage() {
  return (
    <InteriorPage
      title="Notice of Privacy Practices"
      description="HIPAA privacy notice describing encrypted clinical records, record retention and strict clinical-to-retail data isolation."
      eyebrow="HIPAA • QP-POL-002"
      introduction="Clinical information belongs in the encrypted clinical environment. The public site and retail storefront are not channels for transmitting treatment information."
      sections={[
        { title: 'Clinical Records', body: <p>Clinical records are maintained within designated care systems and handled according to applicable Pennsylvania and United States privacy obligations.</p> },
        {
          title: 'Emergency & Crisis',
          body: <p>Queer Pathways does not provide 24/7 emergency crisis intervention. If you are experiencing an acute life-threatening emergency, immediate risk of self-harm, or severe psychiatric distress, you must immediately contact emergency services (911 in the US and Canada), call or text the Suicide & Crisis Lifeline at <strong>988</strong>, or proceed to the nearest hospital emergency room.</p>,
        },
        {
          title: 'How long records are kept',
          body: (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#D3B127]">These windows cover your clinical record. The compliance-documentation window further down the page is a different thing — see the note on it.</p>
              <ul className="space-y-2">
                <li><strong className="text-[#CCDEE0]">Your treatment record:</strong> kept for at least ten years from whichever is later — the date of the last entry in the record, or your eighteenth birthday.</li>
                <li><strong className="text-[#CCDEE0]">Billing and claims records:</strong> kept as part of the clinical record, so at least the same ten years.</li>
              </ul>
              <p className="text-xs">Pennsylvania requires a licensed clinical social worker to keep records for five years from the date of the last entry, under <strong className="text-[#CCDEE0]">49 Pa. Code § 47.78(b)</strong>. The additional five years beyond that floor are a commitment this practice makes on its own, and are not a legal requirement. Where you were under eighteen at the last entry, the ten years run from your eighteenth birthday, which is a longer hold rather than a shorter one.</p>
            </div>
          ),
        },
        {
          title: 'Compliance documentation',
          body: (
            <div className="space-y-3">
              <p><strong className="text-[#CCDEE0]">This is not your clinical record.</strong> It is our own paperwork: the notices, policies, authorizations and analyses we are required to keep to show that we follow federal privacy rules. It does not contain your treatment record and it is not a route to it.</p>
              <p>We keep this documentation for six years from the date it was created or last in effect, as <strong className="text-[#CCDEE0]">45 CFR § 164.530(j)(2)</strong> requires, alongside <strong className="text-[#CCDEE0]">§ 164.316(b)(2)(i)</strong> for the underlying documentation standard.</p>
            </div>
          ),
        },
        {
          title: 'How records are destroyed',
          body: (
            <div className="space-y-3">
              <p>When a retention period ends, records are destroyed rather than archived indefinitely. <strong className="text-[#CCDEE0]">Destruction runs on an annual cycle each April</strong>, so a record may be held slightly beyond its minimum period before it is destroyed. Records are never destroyed before their period ends.</p>
              <p><strong className="text-[#CCDEE0]">This is a virtual practice and we do not create paper records</strong>, so no shredding happens in the ordinary course. If paper were ever created, it would be destroyed by secure shredding through a bonded service.</p>
              <p>Clinical records live in a designated system of record operated for us by a vendor under an agreement. Deletion is directed in that system and confirmed back to us, and we record that the deletion was directed and confirmed. <strong className="text-[#CCDEE0]">We cannot independently verify the erasure behind the vendor's confirmation</strong>, and we do not claim to.</p>
              <p>A record deleted from the system may remain recoverable from encrypted backup until that backup rotates. <strong className="text-[#CCDEE0]">The rotation period is not currently fixed in our written policy</strong>; when it is, we will state it here rather than leave it to inference.</p>
              <p>A destruction log is kept recording the record class, the date and the method. <strong className="text-[#CCDEE0]">The log records no clinical content.</strong></p>
              <p>Where you ask us to delete a record, we do so <strong className="text-[#CCDEE0]">to the extent the law permits, and we retain what the law requires us to keep</strong>. Where we cannot delete something, we will tell you what and why.</p>
            </div>
          ),
        },
        { title: 'Retail Isolation', body: <p>Clinical information is not sent to retail databases. Retail customer data is not entered into the electronic health record.</p> },
        { title: 'Website Data', body: <p>Routine hosting logs may process technical information needed for security and delivery. Do not place sensitive clinical details in general website or retail fields.</p> },
        { title: 'Out-of-Network Reimbursement', body: <p>For out-of-network PPO insurance plans in Pennsylvania, we issue itemized superbills and insurance-ready invoices directly upon payment, enabling self-submission for out-of-network reimbursement.</p> },
        { title: 'Privacy Requests', body: <p>Clients may use established secure clinical channels to ask about access, correction, restriction, or other applicable privacy rights.</p> },
      ]}
    />
  );
}
