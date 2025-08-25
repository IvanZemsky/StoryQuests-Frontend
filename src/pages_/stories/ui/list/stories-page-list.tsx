import {
   STORIES_SEARCH_LIMIT,
   StoriesFiltersParams,
   StoriesList,
   storyService,
} from "@/src/entities/story"
import { countPages } from "@/src/shared/lib"
import { StoryListMainCard } from "@/src/widgets/story-list-main-card"
import { headers } from "next/headers"

type Props = {
   filters: StoriesFiltersParams
   pagination: (totalPagesCount: number | undefined) => React.ReactNode
}

export async function StoriesPageList({ filters, pagination }: Props) {
   const stories = await getStories(filters)

   const totalPagesCount = countPages(stories.total, STORIES_SEARCH_LIMIT)

   return (
      <>
         <StoriesList
            data={stories?.data}
            renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
         />
         {pagination(totalPagesCount)}
      </>
   )
}

async function getStories(filters: StoriesFiltersParams) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie") ?? ""

   const stories = await storyService.find(
      {
         limit: STORIES_SEARCH_LIMIT,
         ...filters,
      },
      { Cookie: cookieHeader },
   )

   return stories
}
