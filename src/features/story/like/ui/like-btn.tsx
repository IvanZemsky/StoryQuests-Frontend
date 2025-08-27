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
   const { toggleLikeMutation, likeBtnState } = useToggleLike(storyId, {
      likes,
      isLiked,
   })

   const handleLikeBtnClick = () => {
      toggleLikeMutation.mutate()
   }

   return (
      <StoryLikeBtnLayout
         likes={likes}
         isLiked={likeBtnState.isLiked}
         isPending={toggleLikeMutation.isPending}
         onClick={handleLikeBtnClick}
         className={className}
      />
   )
}
