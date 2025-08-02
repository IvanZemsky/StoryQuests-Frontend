import { fetchClient } from "@/src/shared/api"
import { Story } from "../model/types"

export const storyService = {
   async find(): Promise<Story[] | undefined> {
      const response = await fetchClient.GET("/stories")
      return response.data
   },
}
