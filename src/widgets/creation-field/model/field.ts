import { AnswerEdge, SceneNode } from "@/src/features/scene"
import { useNodesState, useEdgesState, Connection, addEdge } from "@xyflow/react"
import { useCallback } from "react"
import { initialNodes } from "./nodes"

export function useField() {
   const [nodes, setNodes, onNodesChange] = useNodesState<SceneNode>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<AnswerEdge>([])
   const onConnect = useCallback(
      (params: AnswerEdge | Connection) => setEdges((els) => addEdge(params, els)),
      [setEdges],
   )

   return { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange, onConnect }
}
