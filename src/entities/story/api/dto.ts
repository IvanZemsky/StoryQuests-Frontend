import { Story } from "../model/types"

export type GetStoriesDTO = {
   data: Story[]
   total: number
}

export type StoryPassesUpdateDTO = {
   readonly storyId: string
   readonly passes: number
}

export type StoryLikeUpdateDTO = {
   readonly storyId: string
   readonly isLiked: boolean
   readonly likes: number
}

export type SetStoryResultDTO = {
   readonly _id: string
   readonly datetime: string
   readonly resultSceneId: string
   readonly storyId: string
   readonly userId: string
}

export type GetStoryResultDTO = {
   readonly _id: string
   readonly datetime: string
   readonly resultSceneId: string
   readonly storyId: string
   readonly userId: string
   // readonly scene: GetSceneDto
}

export type CreateStoryMainInfoDTO = {
   name: string
   description: string
   img: string
   tags: string[]
   date: string
}

// export type CreateStoryDto = CreateStoryMainInfoDto & {
//    readonly scenes: CreateSceneDto[]
// }
