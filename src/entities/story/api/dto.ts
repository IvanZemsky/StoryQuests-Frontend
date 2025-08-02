import { z } from "zod"
import { GetStoryDtoSchema } from "../model/schemas"
import { CreateSceneDto, GetSceneDto } from "@/src/entities/scene/api/dto"

export type GetStoryDto = z.infer<typeof GetStoryDtoSchema>

export type StoryPassesUpdateDto = {
   readonly storyId: string
   readonly passes: number
}

export type StoryLikeUpdateDto = {
   readonly storyId: string
   readonly isLiked: boolean
   readonly likes: number
}

export type SetStoryResultDto = {
   readonly _id: string
   readonly datetime: string
   readonly resultSceneId: string
   readonly storyId: string
   readonly userId: string
}

export type GetStoryResultDto = {
   readonly _id: string
   readonly datetime: string
   readonly resultSceneId: string
   readonly storyId: string
   readonly userId: string
   readonly scene: GetSceneDto
}

export type CreateStoryMainInfoDto = {
   name: string
   description: string
   img: string
   tags: string[]
   date: string
}

export type CreateStoryDto = CreateStoryMainInfoDto & {
   readonly scenes: CreateSceneDto[]
}
