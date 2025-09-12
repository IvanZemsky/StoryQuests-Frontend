import { STORIES_SEARCH_LIMIT } from "../../model/constants"
import type { Story } from "../../model/types"
import { StoriesSkeleton } from "../story-skeleton/story-skeleton"
import styles from "./styles.module.css"

type Props = {
   data: Story[] | undefined
   renderItem: (data: Story) => React.ReactNode
   isError?: boolean
   isPending?: boolean
   errorMessage?: string
   notFoundMessage?: React.ReactNode
   append?: React.ReactNode
}

export function StoriesList({
   data,
   renderItem,
   isError,
   isPending,
   errorMessage = "Error",
   notFoundMessage = "Not found",
   append,
}: Props) {
   if (isPending) return <StoriesSkeleton limit={STORIES_SEARCH_LIMIT} />

   if (isError || !data) return <p className={styles.error}>{errorMessage}</p>

   if (data.length === 0) return notFoundMessage

   return (
      <div className={styles.listWrap}>
         <ul className={styles.list}>{data.map((story) => renderItem(story))}</ul>
         {append}
      </div>
   )
}
