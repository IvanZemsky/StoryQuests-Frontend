import { CreateSceneDTO } from "@/src/entities/scene"
import { Story } from "../model/types"

export type GetStoriesDTO = {
   data: Story[]
   total: number
   next: number | null
}

export type StoryPassesUpdateDTO = {
   storyId: string
   passes: number
}

export type StoryLikeUpdateDTO = {
   storyId: string
   isLiked: boolean
   likes: number
}

export type GetStoryResultDTO = {
   _id: string
   datetime: string
   sceneId: string
   storyId: string
   userId: string
}

export type SetStoryResultDTO = {
   storyId: string
   sceneId: string
}

export type CreateStoryInfoDTO = {
   name: string
   description: string
   img: string
   tags: string[]
   sceneCount: number
}

export type CreateStoryDTO = {
   storyInfo: CreateStoryInfoDTO
   scenes: CreateSceneDTO[]
}
