'use client';

import { useState, useMemo } from 'react';
import { categories, tools } from './data/tools';
import CategoryFilter from './components/Sidebar';
import SearchBar from './components/SearchBar';
import IntegrationGrid from './components/IntegrationGrid';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [_, setCurrentPage] = useState(1);

    const filteredTools = useMemo(() => {
        return tools.filter((tool) => {
            const categoryMatch =
                selectedCategory === 'All' ||
                tool.category === selectedCategory;
            const searchMatch =
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={(category) => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                }}
            />
            {/* className="flex-1 flex flex-col overflow-hidden" */}
            <main className="flex-1 overflow-auto">
                <div className="p-16 space-y-4 mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="mx-auto mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Discover Tools!
                        </h1>
                    </div>
                    <SearchBar
                        onSearch={(query) => {
                            setSearchQuery(query);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                <div className="flex-1 overflow-auto px-8 pb-8">
                    <div className="mb-8">
                        <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
                    </div>
                    <IntegrationGrid integrations={filteredTools} />
                </div>
            </main>
        </div>
    );
}
