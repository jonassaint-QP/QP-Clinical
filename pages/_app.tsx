import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/somatic-container.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathWithoutQueryOrFragment = router.asPath.split(/[?#]/, 1)[0] || '/';
  // The SITE ROOT is canonical WITH the trailing slash, because that is what the sitemap
  // declares and what the host serves. Every other route stays without it. The previous
  // version stripped the slash for the root too, so the one page the sitemap lists with a
  // slash was the one page declaring itself without one.
  const canonicalPath = pathWithoutQueryOrFragment === '/'
    ? '/'
    : pathWithoutQueryOrFragment.replace(/\/+$/, '');
  const canonicalUrl = `https://queerpathways.org${canonicalPath}`;

  return (
    <>
      <Head>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
