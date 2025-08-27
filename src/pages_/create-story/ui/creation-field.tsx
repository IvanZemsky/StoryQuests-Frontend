"use client"

import { SceneNode, ScenePanel, useDragAndDropNodes } from "@/src/features/scene"
import { Flow } from "@/src/widgets/flow-field"
import { nodeTypes, edgeTypes } from "@/src/widgets/flow-field"
import { ReactFlowProps } from "@xyflow/react"
import { Dispatch, SetStateAction } from "react"

type Props = ReactFlowProps & {
   setNodes: Dispatch<SetStateAction<SceneNode[]>>
}

export function CreationField({ setNodes, ...flow }: Props) {
   const [onDragOver, onDrop] = useDragAndDropNodes(setNodes)

   return (
      <Flow
         {...flow}
         panel={<ScenePanel />}
         nodeTypes={nodeTypes}
         edgeTypes={edgeTypes}
         onDragOver={onDragOver}
         onDrop={onDrop}
         fitView
      />
   )
}
