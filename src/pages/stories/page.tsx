import {
   STORIES_SEARCH_LIMIT,
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

   const page = parsedParams.data.page

   const stories = await storyService.find({
      limit: STORIES_SEARCH_LIMIT,
      ...parsedParams.data,
   })
   const pagesCount = stories?.total ? countPages(stories.total, STORIES_SEARCH_LIMIT) : 1

   return (
      <StoriesPageLayout
         filters={<StoriesFilters />}
         list={
            <StoriesList
               data={stories?.data}
               renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
            />
         }
         pagination={
            stories?.data && (
               <Pagination
                  current={page}
                  total={pagesCount}
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
