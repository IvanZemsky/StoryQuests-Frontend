"use client"

import { AnswerEdge, SceneNode } from "@/src/features/scene"
import { validateSceneFlowData } from "@/src/features/scene/create-scenes/validation"
import { useState } from "react"

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
   const [isPreviewOpen, setIsPreviewOpen] = useState(false)

   const open = () => {
      if (!validateSceneFlowData(nodes, edges)) {
         onInvalidScenes()
         return
      }

      handleCreateScenes()
      setIsPreviewOpen(true)
   }

   const close = () => {
      setIsPreviewOpen(false)
   }

   return { isOpen: isPreviewOpen, open, close }
}
