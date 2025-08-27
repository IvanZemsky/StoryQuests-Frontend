import { storyService } from "@/src/entities/story"
import { StoryPreviewCard } from "./ui/preview-card/preview-card"
import { PageScene } from "./ui/scene/scene"
import { fetchStory } from "./model/fetch-story"

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
      return <PageScene storyId={id} />
   }

   return <StoryPreviewCard data={story} />
}
