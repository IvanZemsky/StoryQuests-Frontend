"use client"

import { useRef } from "react"
import styles from "./styles.module.css"
import { Button, Select, TextInput, ToggleButtonGroup } from "@/src/shared/ui"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import { filtersLength, filtersSort } from "../model/form"
import { useRouter } from "next/navigation"
import { useFilters } from "../model/use-filters"

export function StoriesFilters() {
   const router = useRouter()
   const searchRef = useRef<HTMLInputElement>(null)
   const { filters, setFilters, handleSearchClick } = useFilters(searchRef)

   const handleResetClick = () => {
      router.push(`/stories`)
   }

   return (
      <form className={styles.filters}>
         <ToggleButtonGroup
            name="sort"
            value={filters.sort ?? ""}
            className={styles.sort}
            onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
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
            value={filters.length}
            onChange={(e) => setFilters((prev) => ({ ...prev, length: e.target.value }))}
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
               defaultValue={searchRef.current?.value ?? ""}
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
