import {
   STORIES_SEARCH_LIMIT,
   StoriesList,
   StoryListMainCard,
   storyService,
} from "@/src/entities/story"
import { StoriesPageLayout } from "./ui/stories-page-layout"
import { StoriesFilters } from "./ui/filters/stories-filters"
import { Pagination } from "@/src/shared/ui"

export async function StoriesPage({
   searchParams,
}: {
   searchParams: Promise<Partial<Record<string, string>>>
}) {
   const page = Number((await searchParams).page) || 1
   const data = await storyService.find({ limit: STORIES_SEARCH_LIMIT, page })

   const pagesCount = data?.total ? Math.ceil(data.total / STORIES_SEARCH_LIMIT) : 1

   return (
      <StoriesPageLayout
         filters={<StoriesFilters />}
         list={
            <StoriesList
               data={data?.data}
               renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
            />
         }
         pagination={<Pagination current={page} total={pagesCount} href="/stories" />}
      />
   )
}
