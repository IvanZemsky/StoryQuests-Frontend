"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import { Button, Select, TextInput, ToggleButtonGroup } from "@/src/shared/ui"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import { filtersLength, filtersSort } from "../model/form"
import { useRouter, useSearchParams } from "next/navigation"

export function StoriesFilters() {
   const router = useRouter()
   const searchParams = useSearchParams()

   const [sort, setSort] = useState("")
   const [length, setLength] = useState("")
   const searchRef = useRef<HTMLInputElement | null>(null)

   useEffect(() => {
      setSort(searchParams?.get("sort") ?? "")
      setLength(searchParams?.get("length") ?? "")
      if (searchRef.current) searchRef.current.value = searchParams?.get("search") ?? ""
   }, [searchParams])

   const handleSearchClick = () => {
      if (!searchRef.current) return
      const query = new URLSearchParams({
         search: searchRef.current.value,
         sort,
         length,
      }).toString()

      router.push(`/stories?${query}`)
   }

   const handleResetClick = () => {
      router.push(`/stories`)
   }

   return (
      <form className={styles.filters}>
         <ToggleButtonGroup
            name="sort"
            value={sort}
            className={styles.sort}
            onChange={(e) => setSort(e.target.value)}
         >
            {filtersSort.map((item) => (
               <ToggleButtonGroup.Button
                  key={item.id}
                  id={item.id}
                  value={item.value}
                  uppercase
               >
                  {item.text}
               </ToggleButtonGroup.Button>
            ))}
         </ToggleButtonGroup>

         <Select
            className={styles.select}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            title="Length"
         >
            {filtersLength.map((item) => (
               <Select.Option key={item.id} id={item.id} value={item.value}>
                  {item.text}
               </Select.Option>
            ))}
         </Select>

         <div className={styles.searchWrap}>
            <TextInput
               className={styles.searchInput}
               placeholder="Search"
               ref={searchRef}
               defaultValue={searchParams?.get("search") ?? ""}
            />

            <Button
               variant="filled"
               leftIcon={<SearchIcon />}
               className={styles.searchBtn}
               onClick={handleSearchClick}
            />

            <Button
               variant="filled"
               type="button"
               rightIcon={<CrossIcon />}
               onClick={handleResetClick}
            />
         </div>
      </form>
   )
}
