"use client"

import { useAuthContext } from "@/src/entities/user"
import { useToggleLike } from "../model/use-toggle-like"
import { StoryLikeBtnLayout } from "./like-btn-layout"
import { useRouter } from "next/navigation"

type Props = {
   storyId: string
   likes: number
   isLiked: boolean
   disabled?: boolean
   className?: string
   isAuth?: boolean
}

export function StoryLikeBtn({ storyId, likes, isLiked = false, className }: Props) {
   const router = useRouter()
   const { session } = useAuthContext()

   const { mutation, likeBtnState, like } = useToggleLike(storyId, {
      likes,
      isLiked,
   })

   const toggleLike = () => {
      if (!session) {
         router.push("/sign-in")
         return
      }

      like()
   }

   return (
      <StoryLikeBtnLayout
         likes={likeBtnState.likes}
         isLiked={likeBtnState.isLiked}
         isPending={mutation.isPending}
         onClick={toggleLike}
         className={className}
      />
   )
}
