import { StoriesPageLayout } from "./ui/layout/stories-page-layout"
import { StoriesFilters } from "@/src/features/story/filters/ui/stories-filters"
import { Pagination, Wrapper } from "@/src/shared/ui"
import { getTypedSearchParams } from "@/src/shared/lib"
import {
   STORIES_SEARCH_LIMIT,
   storiesFiltersParamsSchema,
   StoriesSkeleton,
} from "@/src/entities/story"
import { StoriesPageList } from "./ui/list/stories-page-list"
import { Suspense } from "react"
import styles from "./page.module.css"

export async function StoriesPage({
   searchParams,
}: {
   searchParams: Promise<Record<string, string>>
}) {
   const parsedParams = await getTypedSearchParams(
      storiesFiltersParamsSchema,
      searchParams,
   )

   if (parsedParams.error) {
      return (
         <Wrapper>
            <p>Error: invalid search params</p>
         </Wrapper>
      )
   }

   return (
      <StoriesPageLayout
         filters={
            <StoriesFilters
               key={JSON.stringify(parsedParams.data)}
               params={parsedParams.data}
            />
         }
         list={
            <Suspense
               fallback={<StoriesSkeleton limit={STORIES_SEARCH_LIMIT} />}
               key={JSON.stringify(parsedParams.data)}
            >
               <StoriesPageList
                  filters={parsedParams.data}
                  pagination={async (totalPagesCount) =>
                     !!totalPagesCount && (
                        <Pagination
                           className={styles.pagination}
                           current={parsedParams.data.page}
                           total={totalPagesCount}
                           previousParams={await searchParams}
                           href="/stories"
                        />
                     )
                  }
               />
            </Suspense>
         }
      />
   )
}
