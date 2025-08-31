import { API } from "@/src/shared/api"
import { StoriesFilters, Story } from "../model/types"
import { CreateStoryDTO, GetStoriesDTO, StoryLikeUpdateDTO } from "./dto"

export const storyService = {
   async find(
      query: StoriesFilters,
      headers: Record<string, string> = {},
   ): Promise<GetStoriesDTO> {
      console.log(query)
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
      console.log({
         data: response.data,
         total,
         next,
      })

      return {
         data: response.data,
         total,
         next,
      }
   },

   async findByID(
      storyID: string,
      headers: Record<string, string> = {},
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

   async create(DTO: CreateStoryDTO) {
      const { data } = await API.post<{ storyId: string }>("stories/create", DTO)

      return data
   },
}
