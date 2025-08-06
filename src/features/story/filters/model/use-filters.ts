"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export function useFilters(searchRef?: React.RefObject<HTMLInputElement | null>) {
   const router = useRouter()
   const searchParams = useSearchParams()

   const [filters, setFilters] = useState<{
      page: number
      sort: string
      length: string
   }>({
      page: 1,
      sort: "",
      length: "",
   })

   const handleSearchClick = () => {
      if (!searchRef?.current) return
      const params = new URLSearchParams({
         search: searchRef.current.value,
         page: "1",
      })

      if (filters.sort) params.set("sort", filters.sort)
      if (filters.length) params.set("length", filters.length)

      router.push(`/stories?${params.toString()}`)
   }

   useEffect(() => {
      setFilters((prev) => ({
         page: prev.page,
         sort: searchParams?.get("sort") ?? "",
         length: searchParams?.get("length") ?? "",
      }))

      if (searchRef?.current) searchRef.current.value = searchParams?.get("search") ?? ""
   }, [searchParams, searchRef])

   return { filters, setFilters, handleSearchClick }
}
