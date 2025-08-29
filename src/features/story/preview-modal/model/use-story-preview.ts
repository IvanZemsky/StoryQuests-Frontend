"use client"

import { AnswerEdge, SceneNode } from "@/src/features/scene"
import { validateSceneFlowData } from "@/src/features/scene/create-scenes/use-validate-nodes-data"
import { useState } from "react"

export function useStoryPreview(
   nodes: SceneNode[],
   edges: AnswerEdge[],
   handleCreateScenes: () => void,
) {
   const [isValid, setIsValid] = useState(true)
   const [isPreviewOpen, setIsPreviewOpen] = useState(false)

   const openPreview = () => {
      if (!validateSceneFlowData(nodes, edges)) {
         setIsValid(false)
         return
      }

      handleCreateScenes()
      setIsPreviewOpen(true)
   }

   const closePreview = () => {
      setIsPreviewOpen(false)
   }

   return { isValid, isPreviewOpen, openPreview, closePreview }
}
