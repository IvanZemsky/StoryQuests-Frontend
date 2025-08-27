import { Connection } from "@xyflow/react"
import { AnswerEdge } from "./types"

export const createAnswerEdge = (params: Connection): AnswerEdge => {
   return {
      ...params,
      id: `edge-${Date.now()}`,
      data: { text: "" },
      animated: true,
      type: "answer",
   }
}
