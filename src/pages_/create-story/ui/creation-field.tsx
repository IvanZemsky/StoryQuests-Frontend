"use client"

import { ScenePanel } from "@/src/features/scene/scene-panel"
import { type SceneNode, useDragAndDropNodes } from "@/src/features/scene/nodes"
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
