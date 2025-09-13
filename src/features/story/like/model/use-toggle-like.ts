import { storyService } from "@/src/entities/story"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { revalidateStories } from "./action"
import { useDebounce } from "@/src/shared/lib"
import { StoryLikeUpdateDTO } from "@/src/entities/story/api/dto"
import { APIAxiosError } from "@/src/shared/api"
import { useRouter } from "next/navigation"

export type LikeBtnState = {
   likes: number
   isLiked: boolean
}

export function useToggleLike(storyId: string, initialState: LikeBtnState) {
   const router = useRouter()
   const queryClient = useQueryClient()

   const [likeBtnState, setLikeBtnState] = useState<LikeBtnState>(initialState)

   const mutation = useMutation<StoryLikeUpdateDTO | undefined, APIAxiosError, void>({
      mutationFn: () =>
         storyService.toggleLike({
            storyID: storyId,
            isLiked: initialState.isLiked,
         }),
      onMutate: () => {
         queryClient.cancelQueries({ queryKey: ["stories"] })
         queryClient.cancelQueries({ queryKey: ["story", "byID", storyId] })
      },
      onError: (error) => {
         setLikeBtnState(initialState)
         if (error.status === 401) {
            router.push("/sign-in")
            router.refresh()
         }
      },
      onSettled: async (data) => {
         await revalidateStories(storyId)
         queryClient.invalidateQueries({ queryKey: ["stories"] })
         queryClient.invalidateQueries({ queryKey: ["story", "byID", storyId] })
      },
   })

   const [debouncedMutate, clear] = useDebounce(mutation.mutate, 1000)

   const like = () => {
      const newState = getToggledLike(likeBtnState)

      setLikeBtnState(newState)

      if (newState.isLiked !== initialState.isLiked) {
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
