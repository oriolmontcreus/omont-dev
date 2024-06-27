import dynamic from 'next/dynamic';

const ClientContent = dynamic(() => import('./client'), { ssr: false });

export default function ProjectsPage() {
    return <ClientContent />;
}