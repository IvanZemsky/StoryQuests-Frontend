import { StoryPreviewCard } from "./ui/preview-card/preview-card"
import { fetchStory } from "./model/fetch-story"
import { PageSceneWrap } from "./ui/scene/wrap"

export type StoryPageProps = {
   params: Promise<{
      id: string
   }>
   searchParams: Promise<{ play?: "" }>
}

export async function StoryPage({ params, searchParams }: StoryPageProps) {
   const { id } = await params
   const { play } = await searchParams

   const story = await fetchStory(id)

   if (!story) {
      return <div>Story not found</div>
   }

   if (play !== undefined) {
      return <PageSceneWrap storyId={id} />
   }

   return <StoryPreviewCard data={story} />
}
