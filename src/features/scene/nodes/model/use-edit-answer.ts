import { useReactFlow } from "@xyflow/react"
import { SceneNode, SceneNodeData } from "../../nodes/model/types"
import { AnswerEdge } from "../../edges/model/types"

export function useEditScene(nodeId: string) {
   const { updateNodeData, deleteElements } = useReactFlow<SceneNode, AnswerEdge>()

   const handleDelete = () => {
      deleteElements({ nodes: [{ id: nodeId }] })
   }

   const handleSaveChanges = (data: SceneNodeData) => {
      updateNodeData(nodeId, data)
   }

   return { handleDelete, handleSaveChanges }
}
