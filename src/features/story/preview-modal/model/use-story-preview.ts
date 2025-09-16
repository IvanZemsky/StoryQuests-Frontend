"use client"

import type { SceneNode } from "@/src/features/scene/nodes"
import type { AnswerEdge } from "@/src/features/scene/edges"
import { validateSceneFlowData } from "@/src/features/scene/create-scenes"
import { useModal } from "@/src/shared/lib"

export function useStoryPreview({
   nodes,
   edges,
   handleCreateScenes,
   onInvalidScenes,
}: {
   nodes: SceneNode[]
   edges: AnswerEdge[]
   handleCreateScenes: () => void
   onInvalidScenes: () => void
}) {
   const { isOpen, open, close } = useModal(false, {
      onOpen: () => {
         const isValid = validateSceneFlowData(nodes, edges)
         if (!isValid) {
            onInvalidScenes()
            return false
         }

         handleCreateScenes()
         return true
      },
   })

   return { isOpen, open, close }
}
