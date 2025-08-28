import { Edge, EdgeProps } from "@xyflow/react"
import { MouseEventHandler } from "react"

export type AnswerEdgeData = {} & Record<string, unknown> & {
      text: string
   }

export type AnswerEdge = Edge<AnswerEdgeData> & {
   data: AnswerEdgeData
}

export type AnswerEdgeProps = EdgeProps<AnswerEdge> & {}
