import { storyService } from "@/src/entities/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

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
      mutationFn: () => storyService.toggleLike({ storyID: storyId, isLiked: !likeBtnState.isLiked }),
      onMutate: () => {
         toggleLikeState()
         queryClient.cancelQueries({ queryKey: ["stories", "byId", storyId] })
      },
      onError: () => {
         setLikeBtnState(initialState)
      },
   })

   return {
      likeBtnState,
      toggleLikeMutation,
   }
}

