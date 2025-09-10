import {
   fetchStories,
   STORIES_SEARCH_LIMIT,
   StoriesFiltersParams,
   StoriesList,
} from "@/src/entities/story"
import { countPages } from "@/src/shared/lib"
import { StoryListMainCard } from "@/src/widgets/story-list-main-card"

type Props = {
   filters: StoriesFiltersParams
   pagination: (totalPagesCount: number | undefined) => React.ReactNode
}

export async function StoriesPageList({ filters, pagination }: Props) {
   const stories = await fetchStories({ ...filters, limit: STORIES_SEARCH_LIMIT })

   const totalPagesCount = countPages(stories?.total ?? 0, STORIES_SEARCH_LIMIT)

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
