import { storyService } from "@/src/entities/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { revalidateStories } from "./action"
import { useDebounce } from "@/src/shared/lib"

export type LikeBtnState = {
   likes: number
   isLiked: boolean
}

export function useToggleLike(storyId: string, initialState: LikeBtnState) {
   const queryClient = useQueryClient()

   const [likeBtnState, setLikeBtnState] = useState<LikeBtnState>(initialState)
   const initialStateRef = useRef(initialState)

   const mutation = useMutation({
      mutationFn: () =>
         storyService.toggleLike({
            storyID: storyId,
            isLiked: initialStateRef.current.isLiked,
         }),
      onMutate: () => {
         queryClient.cancelQueries({ queryKey: ["stories"] })
         queryClient.cancelQueries({ queryKey: ["story", "byID", storyId] })
      },
      onError: () => setLikeBtnState(initialStateRef.current),
      onSettled: async (data) => {
         await revalidateStories(storyId)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyId] })

         if (data) {
            initialStateRef.current = data
         }
      },
   })

   const [debouncedMutate, clear] = useDebounce(mutation.mutate, 1500)

   const like = () => {
      const newState = getToggledLike(likeBtnState)

      setLikeBtnState(newState)

      if (newState.isLiked !== initialStateRef.current.isLiked) {
         debouncedMutate()
      } else {
         clear()
      }
   }
   return { likeBtnState, mutation, like }
}

function getToggledLike(prev: LikeBtnState) {
   return {
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
      isLiked: !prev.isLiked,
   }
}
