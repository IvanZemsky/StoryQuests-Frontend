import { storyService } from "@/src/entities/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRef, useState, useEffect } from "react"
import { revalidateStories } from "./action"
import { useDebounce } from "@/src/shared/lib"

type LikeBtnState = {
   likes: number
   isLiked: boolean
}

export function useToggleLike(storyId: string, initialState: LikeBtnState) {
   const queryClient = useQueryClient()

   const [likeBtnState, setLikeBtnState] = useState<LikeBtnState>(initialState)

   // костыль
   const likeStateRef = useRef<LikeBtnState>(likeBtnState)
   useEffect(() => {
      likeStateRef.current = likeBtnState
   }, [likeBtnState])

   const mutation = useMutation({
      mutationFn: () =>
         storyService.toggleLike({ storyID: storyId, isLiked: initialState.isLiked }),
      onMutate: () => {
         queryClient.cancelQueries({ queryKey: ["stories"] })
         queryClient.cancelQueries({ queryKey: ["story", "byID", storyId] })
      },
      onError: () => setLikeBtnState(initialState),
      onSettled: async () => {
         await revalidateStories(storyId)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyId] })
      },
   })

   const debouncedMutate = useDebounce(
      () => {
         if (likeStateRef.current.isLiked !== initialState.isLiked) {
            mutation.mutate()
         }
      },
      1000,
      [likeBtnState, initialState.isLiked],
   )
   
   const like = () => {
      const newState = {
         likes: likeBtnState.isLiked ? likeBtnState.likes - 1 : likeBtnState.likes + 1,
         isLiked: !likeBtnState.isLiked,
      }

      setLikeBtnState(newState)
      debouncedMutate()
   }
   return { likeBtnState, mutation, like }
}
