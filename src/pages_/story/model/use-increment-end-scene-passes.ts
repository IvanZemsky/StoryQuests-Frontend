"use client"

import { sceneService } from "@/src/entities/scene"
import { useMutation } from "@tanstack/react-query"

export function useIncrementEndScenePasses(storyID: string) {
   const mutation = useMutation({
      mutationFn: (sceneID: string) =>
         sceneService.incrementScenePasses(storyID, sceneID),
   })

   return mutation
}
