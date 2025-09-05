import { API } from "@/src/shared/api"
import { EndScene, Scene } from "../model/types"

export const sceneService = {
   async findByStoryID(storyID: string): Promise<Scene[]> {
      const { data } = await API.get<Scene[]>(`stories/${storyID}/scenes`)
      return data
   },

   async incrementScenePasses(storyID: string, sceneID: string) {
      await API.patch(`/stories/${storyID}/scenes/${sceneID}/passes`)
   },

   async findEndScenesByStoryID(storyID: string): Promise<EndScene[]> {
      const { data } = await API.get<EndScene[]>(`stories/${storyID}/results/scenes`)

      return data
   },
}
