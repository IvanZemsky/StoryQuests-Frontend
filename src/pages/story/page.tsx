import { sceneService } from "@/src/entities/scene"
import { storyService } from "@/src/entities/story"

type Props = {
   params: Promise<{
      id: string
   }>
}

export async function StoryPage({params}: Props) {
   const {id} = await params
   const story = await storyService.findByID(id)
   const scenes = await sceneService.findByStoryID(id)

   console.log(story)
   console.log(scenes)

   return <div></div>
}
