import { StoriesList, StoryListMainCard, storyService } from "@/src/entities/story"
import { StoriesPageLayout } from "./ui/stories-page-layout"
import { StoriesFilters } from "./ui/filters/stories-filters"

export async function StoriesPage() {
   const data = await storyService.find()

   return (
      <StoriesPageLayout
         filters={<StoriesFilters/>}
         list={
            <StoriesList
               data={data}
               renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
            />
         }
      />
   )
}
