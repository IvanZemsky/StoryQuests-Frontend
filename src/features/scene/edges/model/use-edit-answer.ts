import { useReactFlow } from "@xyflow/react"
import { SceneNode } from "../../nodes/model/types"
import { AnswerEdge } from "./types"

export function useEditAnswer(edgeId: string) {
   const { updateEdgeData, deleteElements } = useReactFlow<SceneNode, AnswerEdge>()


   const handleDelete = () => {
      deleteElements({ edges: [{ id: edgeId }] })
   }

   const handleSaveChanges = (text: string) => {
      updateEdgeData(edgeId, { text })
   }

   return { handleDelete, handleSaveChanges }
}
