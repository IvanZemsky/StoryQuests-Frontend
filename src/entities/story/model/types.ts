import type { ApiSchemas } from "@/src/shared/api"

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
