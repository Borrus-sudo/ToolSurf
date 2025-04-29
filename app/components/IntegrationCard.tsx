import type { Tool } from '../data/tools';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';

type IntegrationCardProps = {
    tool: Tool;
};

export default function IntegrationCard({ tool }: IntegrationCardProps) {
    // const Icon = tool.icon;

    return (
        <a href={tool.link}>
            <Card className="bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 group h-full cursor-pointer">
                <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src={
                                tool.imgURL ||
                                'https://framerusercontent.com/images/hFxl4TYb8lrYnqlKnfcLYWo9rs.webp?scale-down-to=512'
                            }
                            width={1000}
                            height={1000}
                            className="w-full h-full object-contain"
                            alt="Tool display hero image"
                        />
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}
