"use client"

import { useState, useMemo } from "react"
import { categories, integrations } from "../data/integrations"
import CategoryFilter from "./components/CategoryFilter"
import SearchBar from "./components/SearchBar"
import IntegrationGrid from "./components/IntegrationGrid"
import Pagination from "./components/Pagination"
import { ArrowDown } from "@/app/components/hand-drawn-arrows"

const ITEMS_PER_PAGE = 16

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const categoryMatch = selectedCategory === "All" || integration.category === selectedCategory
      const searchMatch =
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredIntegrations.length / ITEMS_PER_PAGE)
  const paginatedIntegrations = filteredIntegrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category)
          setCurrentPage(1)
        }}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-8 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-zinc-100">Discover Integrations</h1>
            <div className="relative">
              <ArrowDown color="#888" className="w-12 h-24 absolute -bottom-16 right-8 opacity-70" />
            </div>
          </div>
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query)
              setCurrentPage(1)
            }}
          />
        </div>
        <div className="flex-1 overflow-auto px-8 pb-8">
          <div className="mb-8">
            <p className="text-zinc-400 mb-2">
              {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? "s" : ""} found
              {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
            </p>
            <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
          </div>
          <IntegrationGrid integrations={paginatedIntegrations} />
        </div>
        <div className="p-8 border-t border-zinc-800">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>
    </div>
  )
}
