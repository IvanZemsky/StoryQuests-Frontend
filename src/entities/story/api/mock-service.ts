import { fetchClient } from "@/src/shared/api"
import { StoriesFiltersParams, Story } from "../model/types"
import { GetStoriesDTO } from "./dto"

export const storyMockService = {
   async find(
      query: StoriesFiltersParams & { limit?: number; userId?: string } = {
         page: 1,
      },
      headers: Record<string, string> = {},
   ): Promise<GetStoriesDTO> {
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

      if (!data) return { data: [], total: 0, next: null }

      let next: number | null = null
      if (data.length > 0 && query.limit) {
         if (query.page === undefined) {
            next = 2
         } else if (total > query.limit * query.page) {
            next = query.page + 1
         } else {
            next = null
         }
      }

      return {
         data,
         total,
         next,
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
