# Production Deployment Runbook

This runbook preserves the QP-POL-002 boundary between the clinical site and retail storefront. Never copy environment secrets, clinical records, intake submissions, or retail customer data between lanes.

## 1. Clinical Site: queerpathways.org

Repository: `jonassaint-QP/QP-Clinical`

1. Install and validate locally:

   ```bash
   npm ci
   npm run verify
   ```

2. Confirm the production surface contains:
   - the locked intake CTA;
   - Pennsylvania credential `CW023073` and Ontario credential `842649`;
   - the seven-slot cap and seven-business-day intake commitment;
   - no physical practice address;
   - no Stripe, Carepatron, Thrizer, cyan/magenta neon, pure black, pure white, or public use of “Sibling.”

3. Push the reviewed commit to `main`. Netlify builds with `npm run build` from `netlify.toml`.
4. Smoke-test all routes, the booking-anchor scroll, and the `/shop` security modal.
5. Confirm the TherapyPortal button targets `https://www.therapyportal.com/p/queercharts/` in a new tab.
6. Confirm production HTML contains no `iframe`; TherapyPortal blocks third-party framing through its `frame-ancestors` policy.

### ADHD Survival Card automation

Set these variables in the Netlify production environment before publishing the resource route:

- `LEAD_CAPTURE_WEBHOOK_URL`: HTTPS endpoint for the newsletter and resource-delivery automation.
- `LEAD_CAPTURE_WEBHOOK_SECRET`: optional bearer token used to authenticate webhook calls.
- `ADHD_SURVIVAL_CARD_PDF_URL`: public CDN URL for the final PDF attachment.

The webhook receives the normalized email, jurisdiction, consent record, PDF URL, and tags. Ontario submissions include `ontario-warm-referral-pool`; all valid submissions include `newsletter` and `adhd-survival-card`. Confirm the automation sends the PDF link, applies the supplied tags, preserves the consent timestamp, and handles unsubscribe requests before enabling campaign traffic.

After deployment, submit one test for each jurisdiction and confirm the browser returns to `/resources/adhd-survival-card?status=sent`. Missing configuration or an unsuccessful webhook response returns `?status=error` without exposing service details.

## 2. Retail Storefront: queerpathways.com

Repository: `jonassaint-QP/QueerPathways`

1. Confirm `netlify/functions/checkout.ts` exists only in the retail deployment lane.
2. Validate before release:

   ```bash
   npm ci
   npm run lint
   npm run build
   npm audit --omit=dev
   ```

3. Confirm `stripe` is absent from `package.json`, `package-lock.json`, and runtime imports.
4. Exercise the checkout boundary:
   - unapproved origin returns `403`;
   - approved `OPTIONS` returns `204`;
   - non-POST method returns `405`;
   - nested or empty PHI-like keys return `400`;
   - valid retail payload returns `200`.
5. Confirm Netlify aliases include `queerpathways.com` and `www.queerpathways.com`.

## 3. Hostinger Blog: blog.queerpathways.org

Verified August 8, 2026:

- `https://blog.queerpathways.org/robots.txt` returns `200`, allows general search crawling, and declares `https://blog.queerpathways.org/sitemap.xml`.
- `https://blog.queerpathways.org/sitemap.xml` redirects to the Yoast-managed `sitemap_index.xml`; the final target returns `200`.
- The managed index currently exposes 255 URLs across five child sitemaps, exceeding the requested 224–230 range.

Do not overwrite this healthy managed index with a missing or smaller local artifact. The commands below are recovery steps only. They require the operator’s SSH key or interactive password; run them directly from a trusted terminal and never place credentials in source control or chat.

```bash
ssh -p 65002 u519118736@212.1.208.251
cd domains/queerpathways.org/public_html/blog
cat <<'EOF' > robots.txt
User-agent: *
Allow: /

Sitemap: https://blog.queerpathways.org/sitemap.xml
EOF
chmod 644 robots.txt
exit
scp -P 65002 ~/Downloads/sitemap.xml u519118736@212.1.208.251:domains/queerpathways.org/public_html/blog/sitemap.xml
```

Verify afterward:

```bash
curl -fsS https://blog.queerpathways.org/robots.txt
curl -fsSI https://blog.queerpathways.org/sitemap.xml
```

## 4. Google Search Console

An authenticated Google session is required. As of August 8, 2026, the available browser session stops at Google sign-in, so these actions remain operator-only.

1. Open the `blog.queerpathways.org` property.
2. Submit `sitemap.xml` under **Indexing → Sitemaps**.
3. Review historical 404s under **Indexing → Pages**.
4. Inspect and request indexing for high-intent canonical URLs, including `/resources/adhd-survival-guide`.
5. Record submission date, sitemap status, and unresolved crawl errors in the deployment ticket.

## Rollback

- Clinical: redeploy the last known-good Netlify build for `QP-Clinical`.
- Retail: redeploy the last known-good `QueerPathways` build; do not bypass the origin or PHI checks during rollback.
- Blog: restore the previous `robots.txt` or sitemap from the operator’s backup.
