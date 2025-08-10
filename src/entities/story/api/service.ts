import { fetchClient } from "@/src/shared/api"
import { StoriesFiltersParams, Story } from "../model/types"
import { GetStoriesDTO } from "./dto"

export const storyService = {
   async find(
      query: StoriesFiltersParams & { limit?: number } = {
         page: 1,
      },
   ): Promise<GetStoriesDTO | undefined> {
      const { response, data } = await fetchClient.GET("/stories", {
         params: {
            query: {
               page: query.page,
               limit: query.limit,
               sort: query.sort,
               length: query.length,
               search: query.search,
            },
         },
      })

      const total = Number(response.headers.get("X-Total-Count"))

      return {
         data: data as Story[],
         total,
      }
   },

   async findByID(storyID: string): Promise<Story | undefined> {
      const { data } = await fetchClient.GET(`/stories/{storyId}`, {
         params: {
            path: {
               storyId: storyID,
            },
         },
      })

      return data as Story
   },
}
