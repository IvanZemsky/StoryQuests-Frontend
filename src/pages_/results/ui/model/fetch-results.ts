import { sceneService } from "@/src/entities/scene"

export async function fetchResults(storyId: string) {
   try {
      return await sceneService.findEndScenesByStoryID(storyId)
   } catch (error) {
      return null
   }
}
