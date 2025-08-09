"use client"

import styles from "./styles.module.css"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import { Button, Select, TextInput, ToggleButtonGroup } from "@/src/shared/ui"
import { filtersLength, filtersSort } from "../model/form"
import { useFilters } from "../model/use-filters"
import { StoriesFiltersParams } from "@/src/entities/story"

type Props = {
   params: StoriesFiltersParams
}

export function StoriesFilters({ params }: Props) {
   const { filters, setFilters, handleSearchClick, reset } = useFilters(params)

   return (
      <form className={styles.filters}>
         <ToggleButtonGroup
            name="sort"
            value={filters.sort}
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
               defaultValue={filters.search}
               onChange={(e) =>
                  setFilters((prev) => ({ ...prev, search: e.target.value }))
               }
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
               onClick={reset}
            />
         </div>
      </form>
   )
}
