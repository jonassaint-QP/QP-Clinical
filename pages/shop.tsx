import Head from 'next/head';
import { useState } from 'react';
import { LeavesSiteModal } from '../components/LeavesSiteModal';

export default function ShopGatewayPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020501] px-4 text-center text-[#C0BFBC]">
      <Head>
        <title>Storefront Gateway | Queer Pathways</title>
        <meta name="description" content="Secure boundary between Queer Pathways clinical services and the independent adult retail storefront." />
      </Head>
      <main>
        <h1 className="mb-4 text-3xl font-bold text-[#CBB26A]">Clinical and Retail Systems Stay Separate</h1>
        <p className="mb-6 max-w-xl">The storefront uses a separate domain, data environment, and commercial payment lane.</p>
        <button type="button" className="btn-somatic-primary" onClick={() => setIsModalOpen(true)}>Continue to Storefront Gateway</button>
      </main>
      <LeavesSiteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          window.location.href = '/';
        }}
        onConfirm={() => {
          setIsModalOpen(false);
          window.location.href = 'https://queerpathways.com';
        }}
      />
    </div>
  );
}