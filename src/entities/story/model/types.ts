import { z } from "zod"
import {
   StoryOrderBySchema,
   StorySearchParamsSchema,
   StorySortByLengthSchema,
} from "./schemas"
import type { ApiSchemas } from "@/src/shared/api"

export type StoryId = string

export type Story = ApiSchemas["Story"]

export type SortByScenesAmount = z.infer<typeof StorySortByLengthSchema>
export type OrderBy = z.infer<typeof StoryOrderBySchema>

export type StoryFiltersParams = z.infer<typeof StorySearchParamsSchema>

export type StoryFilters = StoryFiltersParams & {
   limit?: number
   byUser?: string
}

export type StorySearchResult = {
   stories: Story[]
   totalCount: number
}

export type SetStoryResult = {
   id: string
   datetime: string
   resultSceneId: string
   storyId: string
   userId: string
}

// export type StoryResult = {
//    id: string
//    datetime: string
//    resultSceneId: string
//    storyId: string
//    userId: string
//    scene: Scene
// }

// export type StoryResultInLS = {
//    storyId: StoryId,
//    datetime: string
//    scene: Scene
// }
