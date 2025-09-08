"use client"

import { useToggleLike } from "../model/use-toggle-like"
import { StoryLikeBtnLayout } from "./like-btn-layout"

type Props = {
   storyId: string
   likes: number
   isLiked: boolean
   disabled?: boolean
   className?: string
}

export function StoryLikeBtn({ storyId, likes, isLiked = false, className }: Props) {
   const { mutation, likeBtnState, like } = useToggleLike(storyId, {
      likes,
      isLiked,
   })

   return (
      <StoryLikeBtnLayout
         likes={likeBtnState.likes}
         isLiked={likeBtnState.isLiked}
         isPending={mutation.isPending}
         onClick={like}
         className={className}
      />
   )
}
