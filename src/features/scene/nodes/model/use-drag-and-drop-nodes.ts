import { useReactFlow } from "@xyflow/react"
import { Dispatch, SetStateAction, useCallback } from "react"
import { DragEvent } from "react"
import { useLatestSceneNumber } from "./use-latest-scene-number"
import { DNDNode, SceneNode } from "./types"

export const DND_XYFLOW_ID = "application/xyflow"

export const useDragAndDropNodes = (setNodes: Dispatch<SetStateAction<SceneNode[]>>) => {
   const { screenToFlowPosition } = useReactFlow()
   const updateSceneNumber = useLatestSceneNumber(1)

   const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = "move"
   }, [])

   const onDrop = useCallback(
      (event: DragEvent<HTMLDivElement>) => {
         event.preventDefault()

         const type = event.dataTransfer.getData(DND_XYFLOW_ID) as DNDNode

         if (!type) {
            return
         }

         const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
         })

         // for the simplicity, scene id equals scene number
         const sceneNodeId = updateSceneNumber()

         const newNode = getNewNode({
            sceneNodeId,
            type,
            position,
         })

         setNodes((nds: SceneNode[]) => nds.concat(newNode))
      },
      [screenToFlowPosition],
   )

   return [onDragOver, onDrop] as const
}

function getNewNode({
   sceneNodeId,
   type,
   position,
}: {
   sceneNodeId: number
   type: DNDNode
   position: { x: number; y: number }
}): SceneNode {
   return {
      id: String(sceneNodeId),
      type,
      position,
      data: {
         number: sceneNodeId,
         title: "",
         description: "",
         img: "",
         type: type === "base" ? "default" : "end",
      },
   }
}
