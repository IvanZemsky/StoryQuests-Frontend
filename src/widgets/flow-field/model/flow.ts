import {
   useNodesState,
   useEdgesState,
   Connection,
   addEdge,
   Edge,
   Node,
   OnNodesChange,
   OnEdgesChange,
   OnConnect,
} from "@xyflow/react"
import { useCallback } from "react"

type EdgeFactory<E extends Edge> = (params: Connection) => E

type UseFieldOptions<N extends Node, E extends Edge> = {
   initialNodes?: N[]
   initialEdges?: E[]
   edgeFactory?: EdgeFactory<E>
}

export function useFlow<N extends Node, E extends Edge>({
   initialNodes = [],
   initialEdges = [],
   edgeFactory,
}: UseFieldOptions<N, E> = {}) {
   const [nodes, setNodes, onNodesChange] = useNodesState<N>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<E>(initialEdges)
   const onConnect: OnConnect = useCallback(
      (params) => setEdges((eds) => addEdge(edgeFactory?.(params) ?? params, eds)),
      [setEdges, edgeFactory],
   )

   return {
      nodes,
      edges,
      setNodes,
      onNodesChange: onNodesChange as OnNodesChange<Node>,
      onEdgesChange: onEdgesChange as OnEdgesChange<Edge>,
      onConnect,
   }
}
