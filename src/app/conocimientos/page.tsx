import dynamic from 'next/dynamic';

const ClientSideContent = dynamic(() => import('./ClientSideContent'), { ssr: false });

export default function KnowledgePage() {
  return <ClientSideContent />;
}