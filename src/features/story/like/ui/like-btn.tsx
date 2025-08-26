"use client"

import HeartIcon from "@/src/shared/assets/icons/heart.svg"
import styles from "./like-btn.module.css"
import clsx from "clsx"
import { useToggleLike } from "../model/use-toggle-like"

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
      <div className={clsx(styles.wrap, className)}>
         <button
            className={clsx(styles.btn, { [styles.liked]: likeBtnState.isLiked })}
            disabled={toggleLikeMutation.isPending}
            onClick={handleLikeBtnClick}
         >
            <HeartIcon />
         </button>

         <p className={styles.count}>{likeBtnState.likes}</p>

         {/* <AuthModal id={storyId} /> */}
      </div>
   )
}
