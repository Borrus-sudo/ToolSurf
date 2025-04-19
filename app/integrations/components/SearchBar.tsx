"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ArrowCurved } from "@/app/components/hand-drawn-arrows"

type SearchBarProps = {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative mb-16 mt-8 max-w-3xl mx-auto">
      <div className="absolute -top-16 right-0 transform rotate-12 opacity-70">
        <ArrowCurved color="#888" className="w-32 h-24" />
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Discover integrations..."
          className="w-full h-14 pl-14 pr-6 rounded-full bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder:text-zinc-400 focus:ring-zinc-500 focus:border-zinc-500 transition-all duration-300"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
      </div>
      <p className="text-zinc-500 text-sm mt-2 ml-4">Find the perfect tools to enhance your workflow</p>
    </div>
  )
}
