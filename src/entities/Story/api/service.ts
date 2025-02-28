import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { GetStoryDto, StoryLikeUpdateDto, StoryPassesUpdateDto } from "./dto"
import { Story, StoryFilters, StoryId } from "../model/types"
import { logParsing, setPath } from "@/shared/lib"
import { RawAxiosRequestHeaders } from "axios"
import { GetStoryDtoSchema } from "../model/schemas"
import { z } from "zod"
import { UserId } from "@/entities/User"
import { setStoryResultAdapter } from "./adapters/setStoryResultAdapter"
import { storyResultAdapter } from "./adapters/storyResultAdapter"

const { Stories, Passes, Like, Results } = APIEndpoints

export const storyService = {
   async fetchStories(params: StoryFilters, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      const response = await api.get<GetStoryDto[]>(Stories, {
         params: { ...params },
         headers,
      })

      logParsing(z.array(GetStoryDtoSchema), response.data)

      const stories: Story[] = response.data.map((story: GetStoryDto) =>
         storyAdapter(story),
      )

      const totalCount = +response.headers["x-total-count"]

      let next: number | null = null
      if (stories.length > 0 && params.limit) {
         if (params.page === undefined) {
            next = 2
         } else if (totalCount > params.limit * params.page) {
            next = params.page + 1
         } else {
            next = null
         }
      }

      return {
         stories,
         totalCount,
         next,
      }
   },

   async fetchStoryById(id: StoryId, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      const response = await api.get<GetStoryDto>(setPath(Stories, id), { headers })

      logParsing(GetStoryDtoSchema, response.data)

      const story: Story = storyAdapter(response.data)
      return story
   },

   async incrementStoryPasses(storyId: StoryId) {
      const response = await api.patch<StoryPassesUpdateDto>(
         setPath(Stories, storyId, Passes),
      )
      return response.data
   },

   async toggleLike(storyId: StoryId) {
      const response = await api.patch<StoryLikeUpdateDto>(
         setPath(Stories, storyId, Like),
      )

      return response.data
   },

   async setStoryResult(options: {
      storyId: StoryId
      userId: UserId
      resultSceneNumber: string
   }) {
      const { storyId, userId, resultSceneNumber } = options
      const response = await api.put(setPath(Stories, storyId, Results, userId), {
         resultSceneNumber,
         datetime: new Date().toISOString(),
      })
      return setStoryResultAdapter(response.data)
   },

   async fetchResult(options: { storyId: StoryId; userId: UserId }) {
      const { storyId, userId } = options
      const response = await api.get(setPath(Stories, storyId, Results, userId))
      return storyResultAdapter(response.data)
   },
}
