'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type SearchBarProps = {
    onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className="mb-16 mt-8 mx-auto">
            <div className="relative flex items-center justify-between">
                <div className="relative mx-auto w-full sm:w-80 h-14">
                    <Input
                        type="text"
                        placeholder="Discover integrations..."
                        className="w-full h-full pl-12 pr-14 rounded-full bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder:text-zinc-400 focus:ring-zinc-500 focus:border-zinc-500 transition-all duration-300"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400">
                        🔎
                    </span>
                </div>
            </div>
        </div>
    );
}
