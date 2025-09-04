"use client"

import { storyService } from "@/src/entities/story"
import { revalidateStories } from "@/src/features/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useIncrementStoryPasses(storyId: string) {
   const queryClient = useQueryClient()

   const mutation = useMutation({
      mutationFn: () => storyService.incrementStoryPasses(storyId),
      onSettled: async () => {
         await revalidateStories(storyId)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyId] })
      },
   })

   return mutation
}
