'use client';

import { Button } from '@/components/ui/button';

import {
    Grid,
    Library,
    PenTool,
    Brain,
    Zap,
    Rocket,
    Video,
    ShoppingCart,
    Users,
    Code,
    Waves,
} from 'lucide-react';

const categoryIcons = {
    All: Grid,
    Libraries: Library,
    Design: PenTool,
    AI: Brain,
    'No-Code': Zap,
    Startups: Rocket,
    Video: Video,
    'E-commerce': ShoppingCart,
    'Social Media': Users,
    Coding: Code,
};

type CategoryFilterProps = {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
};

export default function CategoryFilter({
    categories,
    selectedCategory,
    onSelectCategory,
}: CategoryFilterProps) {
    return (
        <aside className="w-64 px-1 pt-7 bg-zinc-950 border-r border-zinc-800 flex flex-col h-screen">
            <div className="mb-10 pl-7">
                <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                        🌊 ToolSurf
                    </h2>
                </div>
            </div>

            <div className="flex-1 overflow-auto">
                <div className="space-y-2">
                    {categories.map((category) => {
                        //@ts-ignore
                        const Icon = categoryIcons[category];
                        return (
                            <Button
                                key={category}
                                variant={
                                    selectedCategory === category
                                        ? 'default'
                                        : 'ghost'
                                }
                                className={`w-full justify-start text-balance h-auto space-y-2 ${
                                    selectedCategory === category
                                        ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100'
                                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                                }`}
                                onClick={() => onSelectCategory(category)}
                            >
                                {Icon && <Icon className="mr-2 h-4 w-4" />}
                                {category}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
