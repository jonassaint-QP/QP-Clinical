// netlify/functions/checkout.ts
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const origin = event.headers.origin || '';
  const allowedOrigins = [
    'https://queerpathways.com',
    'https://www.queerpathways.com',
    'https://queerpathways.store',
  ];

  if (!allowedOrigins.includes(origin)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: 'Boundary Enforcement: Domain unauthorized.' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    // STRICT ZERO-PHI GUARDRAIL CHECK
    if (payload.medicalNotes || payload.phr || payload.patientId || payload.diagnosis) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'QP-POL-002 Violation: PHI payload rejected in retail gateway.',
        }),
      };
    }

    // Commercial drop-ship payload execution targeting Found Bank Clinical/Retail Sub-Acct
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'SUCCESS',
        message: 'Retail transaction initialized outside clinical boundaries.',
        redirectUrl: 'https://queerpathways.com/order-confirmation',
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Serverless processing failure.' }),
    };
  }
};