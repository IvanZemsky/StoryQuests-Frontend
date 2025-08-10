import { fetchClient } from "@/src/shared/api"
import { Scene } from "../model/types"

export const sceneService = {
   async findByStoryID(storyID: string): Promise<Scene[]> {
      const { data } = await fetchClient.GET(`/stories/{storyId}/scenes`, {
         params: {
            path: {
               storyId: storyID,
            },
         },
      })

      return data as Scene[]
   },
}
