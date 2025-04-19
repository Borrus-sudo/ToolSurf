"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
