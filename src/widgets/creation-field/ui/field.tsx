"use client"

import {
   ReactFlow,
   Background,
   Controls,
   addEdge,
   useEdgesState,
   useNodesState,
   ReactFlowProvider,
} from "@xyflow/react"
import { FieldLayout } from "./field-layout/field-layout"
import styles from "./field.module.css"
import { useState, useCallback } from "react"
import { initialNodes, nodeTypes } from "../model/nodes"
import { edgeTypes } from "../model/edges"
import { SceneNode } from "@/src/features/scene/nodes/model/types"
import { AnswerEdge } from "@/src/features/scene/edges/model/types"

export function Field() {
   const [nodes, , onNodesChange] = useNodesState<SceneNode>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<AnswerEdge>([])
   const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), [])

   return (
      <ReactFlowProvider>
         <FieldLayout
            title="Story creation"
            field={
               <ReactFlow
                  nodeTypes={nodeTypes}
                  edgeTypes={edgeTypes}
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  fitView
               >
                  <Controls
                     className={styles.controls}
                     showInteractive={false}
                  ></Controls>
                  <Background className={styles.background} />
               </ReactFlow>
            }
         />
      </ReactFlowProvider>
   )
}
