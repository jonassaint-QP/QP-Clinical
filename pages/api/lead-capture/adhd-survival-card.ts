import type { NextApiRequest, NextApiResponse } from 'next';

const validJurisdictions = new Set(['ontario', 'pennsylvania', 'elsewhere']);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function redirect(response: NextApiResponse, status: 'sent' | 'error') {
  response.redirect(303, `/resources/adhd-survival-card?status=${status}`);
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const email = typeof request.body.email === 'string' ? request.body.email.trim().toLowerCase() : '';
  const jurisdiction = typeof request.body.jurisdiction === 'string' ? request.body.jurisdiction : '';
  const consent = request.body.consent === 'yes';
  const company = typeof request.body.company === 'string' ? request.body.company.trim() : '';

  if (company) {
    redirect(response, 'sent');
    return;
  }

  if (!emailPattern.test(email) || !validJurisdictions.has(jurisdiction) || !consent) {
    redirect(response, 'error');
    return;
  }

  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL;
  const pdfUrl = process.env.ADHD_SURVIVAL_CARD_PDF_URL;

  if (!webhookUrl || !pdfUrl) {
    console.error('ADHD Survival Card lead capture is missing webhook or PDF configuration.');
    redirect(response, 'error');
    return;
  }

  const tags = ['newsletter', 'adhd-survival-card'];
  if (jurisdiction === 'ontario') {
    tags.push('ontario-warm-referral-pool');
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.LEAD_CAPTURE_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.LEAD_CAPTURE_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        email,
        jurisdiction,
        tags,
        resource: {
          name: 'ADHD Survival Card',
          url: pdfUrl,
        },
        consent: {
          granted: true,
          timestamp: new Date().toISOString(),
          wording: 'Send me the card and occasional Queer Pathways resource emails. I can unsubscribe at any time.',
        },
        source: 'queerpathways.org/resources/adhd-survival-card',
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Lead-capture webhook returned ${webhookResponse.status}`);
    }

    redirect(response, 'sent');
  } catch (error) {
    console.error('ADHD Survival Card lead-capture webhook failed.', error);
    redirect(response, 'error');
  }
}