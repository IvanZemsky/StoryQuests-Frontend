import { type AnswerEdge } from "../edges/model/types"
import { type SceneNode } from "../nodes/model/types"

export function validateSceneFlowData(nodes: SceneNode[], edges: AnswerEdge[]) {
   const isNodesValid = nodes.reduce((bool, { data }) => {
      return bool && !!data.title && !!data.img
   }, true)

   const isEdgesValid = edges.reduce((bool, { data }) => {
      return bool && !!data.text
   }, true)

   if (isNodesValid && isEdgesValid) {
      return true
   }

   return false
}
