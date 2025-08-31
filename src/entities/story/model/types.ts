import type { ApiSchemas } from "@/src/shared/api"
import z from "zod/v4"
import { storiesFiltersParamsSchema } from "./schemas"

export type StoryId = string

export type Story = ApiSchemas["Story"]

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

export type StoriesFiltersParams = z.infer<typeof storiesFiltersParamsSchema>

export type StoriesFilters = StoriesFiltersParams & {
   limit: number
   page: number
   me?: string
   byUserId?: string
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
