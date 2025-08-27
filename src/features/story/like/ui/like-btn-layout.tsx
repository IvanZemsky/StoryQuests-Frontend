import HeartIcon from "@/src/shared/assets/icons/heart.svg"
import styles from "./like-btn.module.css"
import clsx from "clsx"
import { MouseEventHandler } from "react"

type Props = {
   likes: number
   onClick?: MouseEventHandler<HTMLButtonElement>
   isLiked?: boolean
   isPending?: boolean
   className?: string
}

export function StoryLikeBtnLayout({
   likes,
   onClick,
   isPending = false,
   isLiked = false,
   className,
}: Props) {
   return (
      <div className={clsx(styles.wrap, className)}>
         <button
            className={clsx(styles.btn, { [styles.liked]: isLiked })}
            disabled={isPending}
            onClick={onClick}
         >
            <HeartIcon />
         </button>

         <p className={styles.count}>{likes}</p>

         {/* <AuthModal id={storyId} /> */}
      </div>
   )
}
