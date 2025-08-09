import {
   STORIES_SEARCH_LIMIT,
   StoriesFiltersParams,
   StoriesList,
   StoryListMainCard,
   storyService,
} from "@/src/entities/story"
import { StoriesPageLayout } from "./ui/stories-page-layout"
import { StoriesFilters } from "@/src/features/story/filters/ui/stories-filters"
import { Pagination, Wrapper } from "@/src/shared/ui"
import { getTypedSearchParams } from "@/src/shared/lib"
import { storiesFiltersParamsSchema } from "@/src/entities/story"

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

   const { stories, totalPagesCount, currentPage } = await getPageData(parsedParams.data)

   return (
      <StoriesPageLayout
         filters={
            <StoriesFilters
               key={JSON.stringify(parsedParams.data)}
               params={parsedParams.data}
            />
         }
         list={
            <StoriesList
               data={stories?.data}
               renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
            />
         }
         pagination={
            stories?.data && (
               <Pagination
                  current={currentPage}
                  total={totalPagesCount}
                  previousParams={await searchParams}
                  href="/stories"
               />
            )
         }
      />
   )
}

function countPages(total: number, limit: number) {
   return Math.ceil(total / limit)
}

async function getPageData(filters: StoriesFiltersParams) {
   const currentPage = filters.page

   const stories = await storyService.find({
      limit: STORIES_SEARCH_LIMIT,
      ...filters,
   })

   const totalPagesCount = stories?.total
      ? countPages(stories.total, STORIES_SEARCH_LIMIT)
      : 1

   return {
      stories,
      totalPagesCount,
      currentPage,
   }
}
