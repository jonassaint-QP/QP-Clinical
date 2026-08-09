import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const sourceRoots = ['pages', 'components', 'styles'];
const extensions = new Set(['.css', '.ts', '.tsx']);

function collectFiles(directory) {
  if (!existsSync(directory)) return [];

  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory()
      ? collectFiles(path)
      : extensions.has(extname(path))
        ? [path]
        : [];
  });
}

const files = sourceRoots.flatMap((directory) => collectFiles(join(root, directory)));
const sources = files.map((path) => ({
  path: relative(root, path),
  content: readFileSync(path, 'utf8'),
}));
const failures = [];
const allowedColors = new Set([
  '#020501',
  '#153009',
  '#0a1d08',
  '#3e6830',
  '#cbb26a',
  '#d3b127',
  '#c0bfbc',
  '#ccdee0',
]);

const bannedPatterns = [
  { label: 'pure white or pure black hex color', pattern: /#(?:fff(?:fff)?|000(?:000)?)(?![0-9a-f])/gi },
  { label: 'decommissioned cyan or magenta terminology', pattern: /\b(?:cyber[-_ ]?cyan|cyan[-_ ]?cyber|magenta[-_ ]?neon|neon[-_ ]?magenta)\b/gi },
  { label: 'QP-ICP-LANG-001 banned public term', pattern: /\bsibling\b/gi },
  { label: 'banned or deprecated platform', pattern: /\b(?:stripe|carepatron|thrizer)\b/gi },
  { label: 'citation artifact', pattern: /\[cite:\s*\d+\]/gi },
  { label: 'legacy capacity claim', pattern: /\b14\s+(?:specialist\s+)?slots?\b/gi },
  { label: 'embedded frame', pattern: /<iframe\b/gi },
  {
    label: 'physical street address pattern',
    pattern: /\b\d{1,6}\s+(?:[a-z0-9.'-]+\s+){0,4}(?:street|st|avenue|ave|road|rd|boulevard|blvd|drive|dr|lane|ln)\b/gi,
  },
];

for (const source of sources) {
  for (const rule of bannedPatterns) {
    const matches = source.content.match(rule.pattern);
    if (matches) failures.push(`${source.path}: ${rule.label}: ${[...new Set(matches)].join(', ')}`);
  }
}

for (const source of sources) {
  const colors = source.content.match(/#[0-9a-f]{6}\b/gi) || [];
  for (const color of new Set(colors.map((value) => value.toLowerCase()))) {
    if (!allowedColors.has(color)) failures.push(`${source.path}: color outside Somatic Palette: ${color}`);
  }
}

const landingPath = join(root, 'pages/index.tsx');
const landing = readFileSync(landingPath, 'utf8');
const requiredLandingContent = [
  'Adjourn the Courtroom — Book Your Intake Assessment',
  'Everyone thinks I\'m doing fine... but the truth is I\'m not alright.',
  'Ambiguity Tax',
  '/images/217059319_padded_logo.png',
  'Queer Pathways Gold Centaur Archer Logo',
  'Open Secure Booking Portal',
  'https://www.therapyportal.com/p/queercharts/',
  'target="_blank"',
  'rel="noopener noreferrer"',
  'id="therapy-notes-widget"',
  'CW023073',
  '842649',
  'Hard cap of 7 specialist slots total combined across Pennsylvania and Ontario',
  '7-Day Safety Net Active',
  'Rates locked through March 30, 2027',
  '$225',
  '$150',
  '$200',
];

for (const required of requiredLandingContent) {
  if (!landing.includes(required)) failures.push(`pages/index.tsx: missing required content: ${required}`);
}

const clinicalShell = readFileSync(join(root, 'components/ClinicalShell.tsx'), 'utf8');
for (const required of [
  'Queer Pathways Gold Centaur Archer Emblem',
  'Client Portal',
  'Supervision',
  'https://blog.queerpathways.org',
  'Skip to main content',
  'id="main-content"',
  "window.open('https://queerpathways.com', '_blank', 'noopener,noreferrer')",
]) {
  if (!clinicalShell.includes(required)) failures.push(`components/ClinicalShell.tsx: missing shared requirement: ${required}`);
}

const requiredPageContent = new Map([
  ['pages/philosophy.tsx', ["WE DON'T BELIEVE IN BROKEN", 'The Double-Outsider Framework', 'The Internal Courtroom', 'The Ambiguity Tax', 'What We Offer Instead']],
  ['pages/services.tsx', ['THREE PATHWAYS. ONE RADICAL PREMISE.', 'Specialist Scaffolding', 'Relational Sovereignty', 'Gender Story Prep', 'DIGNITY INVESTMENT PRICING', '+1 (365) 599-9002']],
  ['pages/consultation.tsx', ['SUPERVISION: THE DBT CONSULTATION GROUP', 'The Focus', 'Format & Investment', '$75 USD / $100 CAD per session', 'Joshua@QueerPathways.org']],
]);

for (const [pagePath, requirements] of requiredPageContent) {
  const pageSource = readFileSync(join(root, pagePath), 'utf8');
  for (const required of requirements) {
    if (!pageSource.includes(required)) failures.push(`${pagePath}: missing required content: ${required}`);
  }
}

const requiredRoutes = [
  'services.tsx',
  'philosophy.tsx',
  'consultation.tsx',
  'philly-queer-therapy.tsx',
  'toronto-queer-therapy.tsx',
  'terms.tsx',
  'privacy.tsx',
  'gfe.tsx',
  'phipa-addendum.tsx',
  'memoir-disclaimer.tsx',
  'shop.tsx',
  'resources/adhd-survival-guide.tsx',
  'resources/glossary.tsx',
  'resources/thriving-ten-rules.tsx',
];

for (const route of requiredRoutes) {
  if (!existsSync(join(root, 'pages', route))) failures.push(`pages/${route}: required production route is missing`);
}

for (const publicFile of ['public/robots.txt', 'public/sitemap.xml']) {
  if (!existsSync(join(root, publicFile))) failures.push(`${publicFile}: required crawl asset is missing`);
}

const emblemPath = join(root, 'public/images/217059319_padded_logo.png');
if (!existsSync(emblemPath)) {
  failures.push('public/images/217059319_padded_logo.png: required Centaur emblem is missing');
} else {
  const metadata = await sharp(emblemPath).metadata();
  const { channels } = await sharp(emblemPath).stats();
  const alphaChannel = channels[3];

  if (metadata.width !== 1000 || metadata.height !== 1000) {
    failures.push('public/images/217059319_padded_logo.png: Centaur emblem must remain 1000x1000');
  }
  if (!metadata.hasAlpha || !alphaChannel || alphaChannel.min === 255) {
    failures.push('public/images/217059319_padded_logo.png: Centaur emblem must contain real transparent pixels');
  }
}

const interiorPage = readFileSync(join(root, 'components/InteriorPage.tsx'), 'utf8');
for (const required of [
  'Hard cap of 7 specialist slots total combined across Pennsylvania and Ontario.',
  'Adjourn the Courtroom — Book Your Intake Assessment',
]) {
  if (!interiorPage.includes(required)) failures.push(`components/InteriorPage.tsx: missing shared requirement: ${required}`);
}

const modal = readFileSync(join(root, 'components/LeavesSiteModal.tsx'), 'utf8');
const requiredModalCopy = "You're leaving the Queer Pathways clinical portal and heading to our retail storefront at";
if (!modal.includes(requiredModalCopy) || !modal.includes('Your clinical data stays here. Browse freely.')) {
  failures.push('components/LeavesSiteModal.tsx: required clinical-to-retail boundary copy is missing');
}

for (const required of ["event.key !== 'Tab'", 'element.inert = true', "element.setAttribute('aria-hidden', 'true')"]) {
  if (!modal.includes(required)) failures.push(`components/LeavesSiteModal.tsx: missing modal accessibility requirement: ${required}`);
}

const documentSource = readFileSync(join(root, 'pages/_document.tsx'), 'utf8');
if (!documentSource.includes('<Html lang="en">')) {
  failures.push('pages/_document.tsx: document language must be English');
}

const netlifyConfig = readFileSync(join(root, 'netlify.toml'), 'utf8');
for (const required of [
  '@netlify/plugin-nextjs',
  'Content-Security-Policy',
  'Strict-Transport-Security',
  'X-Frame-Options',
  'X-Content-Type-Options',
  'Referrer-Policy',
  'Permissions-Policy',
]) {
  if (!netlifyConfig.includes(required)) failures.push(`netlify.toml: missing deployment security requirement: ${required}`);
}

if (existsSync(join(root, 'netlify/functions'))) {
  failures.push('netlify/functions: retail serverless functions must not be deployed from the clinical repository');
}

if (failures.length > 0) {
  console.error('Compliance audit failed:\n');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Compliance audit passed across ${files.length} clinical source files.`);
