import { sceneService } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"

type Props = {
   storyId: string
}

export async function PageScene({ storyId }: Props) {
   const scenes = await sceneService.findByStoryID(storyId)

   if (!scenes) {
      return <p>Scenes not found</p>
   }

   return <Scene data={scenes} firstSceneNumber={1} />
}
