import dynamic from 'next/dynamic';

const ClientContent = dynamic(() => import('./client'), { ssr: false });

export default function SobreMiPage() {
  return <ClientContent />;
}