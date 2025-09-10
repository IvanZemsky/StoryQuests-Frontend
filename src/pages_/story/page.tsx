import { StoryPreviewCard } from "./ui/preview-card/preview-card"
import { PageSceneWrap } from "./ui/scene/wrap"
import { fetchSession } from "./model/fetch-session"
import { fetchStory } from "@/src/entities/story"

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
   
   const session = await fetchSession()

   if (!story) {
      return <div>Story not found</div>
   }

   if (play !== undefined) {
      return <PageSceneWrap storyId={id} isAuth={!!session} />
   }

   return <StoryPreviewCard data={story} />
}
