import Head from 'next/head';
import type { GetServerSideProps } from 'next';

export default function TorontoQueerTherapyGone() {
  return (
    <>
      <Head>
        <title>Gone | Queer Pathways</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-[#020501] px-4 text-center text-[#C0BFBC]">
        <div>
          <p className="mb-3 text-sm font-bold text-[#D3B127]">410</p>
          <h1 className="mb-4 text-3xl font-bold text-[#CBB26A]">This pathway is no longer available.</h1>
          <p className="mb-6">The requested page has been permanently withdrawn.</p>
          <a href="/" className="btn-somatic-primary">Return to Queer Pathways</a>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.statusCode = 410;
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  return { props: {} };
};
