import { storyService } from "@/src/entities/story"
import { useMutation } from "@tanstack/react-query"

export function useSetStoryResult(storyId: string) {
   return useMutation({
      mutationFn: (sceneId: string) => storyService.setStoryResult({ storyId, sceneId }),
   })
}
