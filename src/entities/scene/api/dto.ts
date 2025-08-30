import { SceneAnswer } from "../model/types"

export type CreateSceneDTO = {
   title: string
   description: string
   img: string
   number: number
   type: "default" | "end"
   answers: SceneAnswer[]
}