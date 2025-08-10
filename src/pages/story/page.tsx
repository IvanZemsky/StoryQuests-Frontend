import { sceneService } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"

type Props = {
   params: Promise<{
      id: string
   }>
}

export async function StoryPage({ params }: Props) {
   const { id } = await params
   const scenes = await sceneService.findByStoryID(id)

   console.log(scenes)

   if (!scenes) {
      return <div>Story not found</div>
   }

   return <Scene data={scenes} />
}
