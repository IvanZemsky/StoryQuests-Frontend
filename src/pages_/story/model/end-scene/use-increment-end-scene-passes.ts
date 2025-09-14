"use client"

import { sceneService } from "@/src/entities/scene"
import { useMutation } from "@tanstack/react-query"

export function useIncrementEndScenePasses(storyId: string) {
   const mutation = useMutation({
      mutationFn: (sceneId: string) =>
         sceneService.incrementScenePasses(storyId, sceneId),
   })

   return mutation
}
