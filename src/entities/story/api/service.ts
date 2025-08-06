import { fetchClient } from "@/src/shared/api"
import { Story } from "../model/types"
import { GetStoriesDTO } from "./dto"

export const storyService = {
   async find(
      query: {
         page?: number
         limit?: number
         sort?: string
         length?: string
         search?: string
      } = {},
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
}
