"use client"

import { useState } from "react"
import styles from "./styles.module.css"
import { Button, Select, TextInput, ToggleButtonGroup } from "@/src/shared/ui"
import SearchIcon from "@/src/shared/assets/icons/search.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"

export function StoriesFilters() {
   const [sort, setSort] = useState("")
   const [length, setLength] = useState("")

   return (
      <form className={styles.filters}>
         <ToggleButtonGroup
            name="sort"
            value={sort}
            className={styles.sort}
            onChange={(e) => setSort(e.target.value)}
         >
            <ToggleButtonGroup.Button id="new" value="new" uppercase>
               New
            </ToggleButtonGroup.Button>
            <ToggleButtonGroup.Button id="popular" value="popular" uppercase>
               Popular
            </ToggleButtonGroup.Button>
            <ToggleButtonGroup.Button id="best" value="best" uppercase>
               best
            </ToggleButtonGroup.Button>
         </ToggleButtonGroup>

         <Select
            className={styles.select}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            title="Length"
         >
            <Select.Option id="length-short" value="short" uppercase>
               Short
            </Select.Option>
            <Select.Option id="length-medium" value="medium" uppercase>
               Medium
            </Select.Option>
            <Select.Option id="length-long" value="long" uppercase>
               Long
            </Select.Option>
         </Select>

         <div className={styles.searchWrap}>
            <TextInput className={styles.searchInput} placeholder="Search" />

            <Button
               variant="filled"
               leftIcon={<SearchIcon />}
               type="submit"
               className={styles.searchBtn}
            />

            <Button variant="filled" rightIcon={<CrossIcon />} />
         </div>
      </form>
   )
}
