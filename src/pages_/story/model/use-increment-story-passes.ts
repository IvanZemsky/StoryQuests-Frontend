"use client"

import { storyService } from "@/src/entities/story"
import { revalidateStories } from "@/src/features/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useIncrementStoryPasses(storyID: string) {
   const queryClient = useQueryClient()

   const mutation = useMutation({
      mutationFn: () => storyService.incrementStoryPasses(storyID),
      onSettled: async () => {
         await revalidateStories(storyID)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyID] })
      },
   })

   return mutation
}
