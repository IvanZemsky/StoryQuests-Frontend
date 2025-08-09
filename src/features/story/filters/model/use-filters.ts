"use client"

import { StoriesFiltersParams } from "@/src/entities/story"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function useFilters(filtersFromParams: StoriesFiltersParams) {
   const router = useRouter()

   const [filters, setFilters] = useState<{
      page: number
      sort: string
      length: string
      search: string
   }>({
      page: filtersFromParams.page ?? 1,
      sort: filtersFromParams.sort ?? "",
      length: filtersFromParams.length ?? "",
      search: filtersFromParams.search ?? "",
   })

   const handleSearchClick = () => {
      const params = new URLSearchParams({
         page: "1",
      })

      if (filters.search) params.set("search", filters.search)
      if (filters.sort) params.set("sort", filters.sort)
      if (filters.length) params.set("length", filters.length)

      router.push(`/stories?${params.toString()}`)
   }

   const reset = () => router.push(`/stories`)

   return { filters, setFilters, handleSearchClick, reset }
}
