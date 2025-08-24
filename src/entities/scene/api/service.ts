import { API } from "@/src/shared/api"
import { Scene } from "../model/types"

export const sceneService = {
   async findByStoryID(storyID: string): Promise<Scene[]> {
      const { data } = await API.get<Scene[]>(`stories/${storyID}/scenes`)
      return data
   },
}
