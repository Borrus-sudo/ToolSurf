"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/app/components/hand-drawn-arrows"

type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-zinc-100">Categories</h2>
        <p className="text-sm text-zinc-400">Filter by category</p>
      </div>
      <div className="relative">
        <div className="absolute right-0 top-0 transform translate-x-8 -translate-y-4">
          <ArrowRight color="#888" className="w-24 h-12 rotate-45" />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="space-y-1 p-6 pt-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className={`w-full justify-start text-sm py-2 px-4 h-auto mb-2 ${
                selectedCategory === category
                  ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
