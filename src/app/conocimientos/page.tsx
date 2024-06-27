import dynamic from 'next/dynamic';

const ClientsideContent = dynamic(() => import('./ClientsideContent'), { ssr: false });

export default function KnowledgePage() {
  return <ClientsideContent />;
}