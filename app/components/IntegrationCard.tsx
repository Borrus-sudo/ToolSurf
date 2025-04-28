import type { Tool } from '../data/tools';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type IntegrationCardProps = {
    tool: Tool;
};

export default function IntegrationCard({ tool }: IntegrationCardProps) {
    // const Icon = tool.icon;

    return (
        <Card className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 group h-full">
            <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center space-y-4 mb-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300">
                        {/* <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" /> */}
                        <Image
                            src={tool.imgURL}
                            width={500}
                            height={500}
                            alt="Tool display hero image"
                        />
                    </div>
                    <h3 className="font-semibold text-base text-zinc-100">
                        {tool.name}
                    </h3>
                </div>
                <p className="text-sm text-zinc-400 flex-grow overflow-hidden">
                    {tool.description.length > 120
                        ? `${tool.description.substring(0, 120)}...`
                        : tool.description}
                </p>
            </CardContent>
        </Card>
    );
}
