import type { Tool } from '../data/tools';
import IntegrationCard from './IntegrationCard';

type IntegrationGridProps = {
    integrations: Tool[];
};

export default function IntegrationGrid({
    integrations,
}: IntegrationGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
            {integrations.map((integration) => (
                <IntegrationCard key={integration.id} tool={integration} />
            ))}
        </div>
    );
}
