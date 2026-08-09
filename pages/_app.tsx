import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/somatic-container.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathWithoutQueryOrFragment = router.asPath.split(/[?#]/, 1)[0] || '/';
  const canonicalPath = pathWithoutQueryOrFragment === '/'
    ? ''
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
