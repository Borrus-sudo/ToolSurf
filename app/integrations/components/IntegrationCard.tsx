import type { Integration } from "../../data/integrations"
import { Card, CardContent } from "@/components/ui/card"

type IntegrationCardProps = {
  integration: Integration
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  const Icon = integration.icon

  return (
    <Card className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 group h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex flex-col items-center text-center space-y-4 mb-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${integration.color}20` }}
          >
            <Icon
              className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
              style={{ color: integration.color }}
            />
          </div>
          <h3 className="font-semibold text-base text-zinc-100">{integration.name}</h3>
        </div>
        <p className="text-sm text-zinc-400 flex-grow overflow-hidden">
          {integration.description.length > 120
            ? `${integration.description.substring(0, 120)}...`
            : integration.description}
        </p>
      </CardContent>
    </Card>
  )
}
