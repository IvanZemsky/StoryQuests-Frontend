"use client"

import { AnswerEdge, SceneNode } from "@/src/features/scene"
import { validateSceneFlowData } from "@/src/features/scene/create-scenes/validation"
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
