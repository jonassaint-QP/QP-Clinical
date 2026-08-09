# QP Clinical

Dark-mode-native clinical landing page for Queer Pathways. The site keeps clinical booking on `queerpathways.org` and places a confirmation boundary before visitors continue to the retail storefront.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run verify
npm audit --omit=dev
```

The compliance audit enforces the visual, terminology, booking, credential, pricing, physical-address, and clinical/retail separation rules defined by QP-POL-002 and QP-ICP-LANG-001.

## Deployment Architecture

This repository is the clinical lane only. It deploys the Next.js Pages Router application for `queerpathways.org`; it must not deploy retail checkout functions or store retail transaction data.

The retail checkout boundary is deployed from `jonassaint-QP/QueerPathways` at `netlify/functions/checkout.ts`. It permits only approved retail origins and rejects PHI-like keys recursively.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the clinical, retail, Hostinger blog, Search Console, verification, and rollback procedures.
