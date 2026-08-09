import Head from 'next/head';

export default function ServerErrorPage() {
  return (
    <>
      <Head><title>Service Interrupted | Queer Pathways</title></Head>
      <main className="flex min-h-screen items-center justify-center bg-[#020501] px-4 text-center text-[#C0BFBC]">
        <div>
          <p className="mb-3 text-sm font-bold text-[#D3B127]">500</p>
          <h1 className="mb-4 text-3xl font-bold text-[#CBB26A]">The portal is temporarily resting.</h1>
          <a href="/" className="btn-somatic-primary">Return to Queer Pathways</a>
        </div>
      </main>
    </>
  );
}