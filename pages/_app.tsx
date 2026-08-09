import type { AppProps } from 'next/app';
import '../styles/somatic-container.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}