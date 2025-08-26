import { API } from "@/src/shared/api"
import { StoriesFilters, Story } from "../model/types"
import { GetStoriesDTO, StoryLikeUpdateDTO } from "./dto"

export const storyService = {
   async find(
      query: StoriesFilters,
      headers: Record<string, string> = {},
   ): Promise<GetStoriesDTO> {
      const response = await API.get<Story[]>("stories", {
         params: {
            ...query,
            page: query.page ?? 1,
         },
         headers,
      })

      const total = Number(response.headers["x-total-count"])

      return {
         data: response.data as Story[],
         total,
      }
   },

   async findByID(
      storyID: string,
      headers: Record<string, string>,
   ): Promise<Story | undefined> {
      const response = await API.get<Story>(`stories/${storyID}`, {
         headers,
      })

      return response.data
   },

   async toggleLike(
      {
         storyID,
         isLiked,
      }: {
         storyID: string
         isLiked: boolean
      },
      headers: Record<string, string> = {},
   ): Promise<StoryLikeUpdateDTO | undefined> {
      const { data } = await API.patch(`stories/${storyID}/like`, {
         isLiked,
         headers,
      })

      return data
   },
}
