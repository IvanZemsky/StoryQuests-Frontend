import { API, getBaseUrl } from "@/src/shared/api"
import { StoriesFilters, Story } from "../model/types"
import {
   CreateStoryDTO,
   GetStoriesDTO,
   GetStoryResultDTO,
   SetStoryResultDTO,
   StoryLikeUpdateDTO,
} from "./dto"

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

      const stories: Story[] = response.data

      const total = Number(response.headers["x-total-count"])

      let next: number | null = null
      if (stories.length > 0 && query.limit) {
         if (query.page === undefined) {
            next = 2
         } else if (total > query.limit * query.page) {
            next = query.page + 1
         } else {
            next = null
         }
      }

      return {
         data: response.data,
         total,
         next,
      }
   },

   // fetch for deduplication
   async findByID(storyID: string, headers: Record<string, string> = {}): Promise<Story> {
      const url = getBaseUrl()
      const res = await fetch(`${url}/stories/${storyID}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            ...headers,
         },
         next: { tags: [`story-${storyID}`] },
      })

      if (!res.ok) {
         throw new Error(`Failed to fetch story ${storyID}: ${res.statusText}`)
      }

      return res.json()
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

   async create(DTO: CreateStoryDTO) {
      const { data } = await API.post<{ storyId: string }>("stories/create", DTO)

      return data
   },

   async incrementStoryPasses(storyID: string) {
      await API.patch(`stories/${storyID}/passes`)
   },

   async setStoryResult(dto: SetStoryResultDTO) {
      const { data } = await API.put<GetStoryResultDTO>(
         `stories/${dto.storyId}/results`,
         dto,
      )
      return data
   },

   async findResultByUserID(storyID: string, userID: string) {
      const { data } = await API.get<GetStoryResultDTO>(
         `stories/${storyID}/results/${userID}`,
      )
      return data
   },

   async findMyResult(storyID: string, headers: Record<string, string> = {}) {
      const { data } = await API.get<GetStoryResultDTO>(`stories/${storyID}/myresult`, {
         headers,
      })
      return data
   },
}
