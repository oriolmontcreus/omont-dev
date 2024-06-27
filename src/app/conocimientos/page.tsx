import dynamic from 'next/dynamic';

const ClientsideContent = dynamic(() => import('./client'), { ssr: false });

export default function KnowledgePage() {
  return <ClientsideContent />;
}