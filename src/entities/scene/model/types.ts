import { ApiSchemas } from "@/src/shared/api"

export type Scene = ApiSchemas["Scene"]

export type EndScene = Omit<Scene, "type" | "passes"> & {
   type: "end"
   passes: number
}

export type SceneAnswer = ApiSchemas["Answer"]
