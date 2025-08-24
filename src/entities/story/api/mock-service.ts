import { fetchClient } from "@/src/shared/api"
import { StoriesFiltersParams, Story } from "../model/types"
import { GetStoriesDTO } from "./dto"

export const storyMockService = {
   async find(
      query: StoriesFiltersParams & { limit?: number; userId?: string } = {
         page: 1,
      },
      headers: Record<string, string> = {},
   ): Promise<GetStoriesDTO | undefined> {
      const { response, data } = await fetchClient.GET("/stories", {
         params: {
            query: {
               page: query.page,
               limit: query.limit,
               sort: query.sort,
               length: query.length,
               search: query.search,
               userId: query.userId,
            },
         },
         next: {
            tags: ["stories"],
         },
         credentials: "include",
         headers,
      })

      const total = Number(response.headers.get("X-Total-Count"))

      return {
         data: data as Story[],
         total,
      }
   },

   async findByID(
      storyID: string,
      headers: Record<string, string>,
   ): Promise<Story | undefined> {
      const { data } = await fetchClient.GET(`/stories/{storyId}`, {
         params: {
            path: {
               storyId: storyID,
            },
         },
         credentials: "include",
         headers,
      })

      console.log("data fetched")

      return data as Story
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
   ): Promise<Story | undefined> {
      const { data } = await fetchClient.PATCH(`/stories/{storyId}/like`, {
         params: {
            path: {
               storyId: storyID,
            },
         },
         body: {
            isLiked,
         },
         credentials: "include",
         headers,
      })

      return data
   },
}
