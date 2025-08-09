import {
   useNodesState,
   useEdgesState,
   Connection,
   addEdge,
   Edge,
   Node,
   OnNodesChange,
   OnEdgesChange,
} from "@xyflow/react"
import { useCallback } from "react"

type UseFieldOptions<T extends Node, U extends Edge> = {
   initialNodes?: T[]
   initialEdges?: U[]
}

export function useFlow<T extends Node, U extends Edge>({
   initialNodes = [],
   initialEdges = [],
}: UseFieldOptions<T, U> = {}) {
   const [nodes, _, onNodesChange] = useNodesState<T>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<U>(initialEdges)
   const onConnect = useCallback(
      (params: U | Connection) => setEdges((els) => addEdge(params, els)),
      [setEdges],
   )

   return {
      nodes,
      edges,
      onNodesChange: onNodesChange as OnNodesChange<Node>,

      onEdgesChange: onEdgesChange as OnEdgesChange<Edge>,
      onConnect,
   }
}
