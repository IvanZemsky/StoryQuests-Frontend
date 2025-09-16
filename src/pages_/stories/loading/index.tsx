import { Skeleton, Wrapper } from "@/src/shared/ui"
import styles from "./loading.module.css"
import { STORIES_SEARCH_LIMIT, StoriesSkeleton } from "@/src/entities/story"

export function StoriesPageLoading() {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.filters}>
            <Skeleton className={styles.sort} />
            <Skeleton className={styles.length} />
            <div className={styles.searchWrap}>
               <Skeleton className={styles.search} />
               <Skeleton className={styles.btn} />
               <Skeleton className={styles.btn} />
            </div>
         </div>

         <StoriesSkeleton limit={STORIES_SEARCH_LIMIT} />
      </Wrapper>
   )
}
