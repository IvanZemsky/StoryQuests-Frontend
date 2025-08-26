import { storyService } from "@/src/entities/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { revalidateStories } from "./action"

type LikeBtnState = {
   likes: number
   isLiked: boolean
}

export function useToggleLike(storyId: string, initialState: LikeBtnState) {
   const queryClient = useQueryClient()
   const [likeBtnState, setLikeBtnState] = useState<LikeBtnState>(initialState)

   const toggleLikeState = () => {
      setLikeBtnState({
         likes: likeBtnState.isLiked ? likeBtnState.likes - 1 : likeBtnState.likes + 1,
         isLiked: !likeBtnState.isLiked,
      })
   }

   const toggleLikeMutation = useMutation({
      mutationFn: () =>
         storyService.toggleLike({ storyID: storyId, isLiked: !likeBtnState.isLiked }),
      onMutate: () => {
         toggleLikeState()
         queryClient.cancelQueries({ queryKey: ["stories"] })
         queryClient.cancelQueries({ queryKey: ["story", "byID", storyId] })
      },
      onError: () => {
         setLikeBtnState(initialState)
      },
      onSettled: async () => {
         await revalidateStories(storyId)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyId] })
      },
   })

   return {
      likeBtnState,
      toggleLikeMutation,
   }
}
