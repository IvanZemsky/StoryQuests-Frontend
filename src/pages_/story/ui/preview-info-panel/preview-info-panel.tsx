import { Story } from "@/src/entities/story"
import styles from "./preview-info-panel.module.css"
import EyeIcon from "@/src/shared/assets/icons/eye.svg"
import HeartIcon from "@/src/shared/assets/icons/heart.svg"
import Link from "next/link"

type Props = {
   passes: number
   likes: number
   author: Story["author"]
}

export function PreviewInfoPanel({ author, likes, passes }: Props) {
   return (
      <div className={styles.panel}>
         <div className={styles.item}>
            <Link
               className={styles.authorLink}
               href={`/users/${author.id}`}
            >
               @{author.login}
            </Link>
         </div>
         <div className={styles.item}>
            <HeartIcon /> {likes}
         </div>
         <div className={styles.item}>
            <EyeIcon /> {passes}
         </div>
      </div>
   )
}
