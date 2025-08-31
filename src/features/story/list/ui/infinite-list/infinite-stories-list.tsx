"use client"

import { StoriesFilters, StoriesList, StoriesSkeleton, Story } from "@/src/entities/story"
import { ClientLoading } from "@/src/shared/ui"
import styles from "./infinite-stories-list.module.css"
import { useInfiniteStories } from "../../model/use-infinite-stories"
import { useCursorRef } from "@/src/shared/lib"

type Props = {
   filters: StoriesFilters
   notFoundMessage?: string
   label?: React.ReactNode
   renderItem: (data: Story) => React.ReactNode
}
export function InfiniteStoriesList({
   filters,
   label,
   notFoundMessage,
   renderItem,
}: Props) {
   const { data, isError, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
      useInfiniteStories(filters)

   const cursorRef = useCursorRef(fetchNextPage)

   if (isError) return <p>Error while fetching stories</p>
   if (isPending) return <StoriesSkeleton limit={filters.limit} />

   return (
      <div className={styles.wrap}>
         <StoriesList
            data={data}
            notFoundMessage={<p className={styles.notFoundMessage}>{notFoundMessage}</p>}
            renderItem={renderItem}
         />
         <div ref={cursorRef}>
            {!hasNextPage && label}
            {isFetchingNextPage && <ClientLoading />}
         </div>
      </div>
   )
}
