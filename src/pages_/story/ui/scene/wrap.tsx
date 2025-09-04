import { sceneService } from "@/src/entities/scene"
import { PageScene } from "./scene"

type Props = {
   storyId: string
   isAuth: boolean
}

export async function PageSceneWrap({ storyId, isAuth }: Props) {
   const scenes = await sceneService.findByStoryID(storyId)

   if (!scenes) {
      return <p>Scenes not found</p>
   }

   return <PageScene data={scenes} storyId={storyId} isAuth={isAuth} />
}
