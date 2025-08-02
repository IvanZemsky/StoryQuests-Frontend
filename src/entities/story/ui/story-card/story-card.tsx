import styles from "./styles.module.css"
import type { Story } from "../../model/types"
import EyeIcon from "@/src/shared/assets/icons/eye.svg"
import clsx from "clsx"

type Props = {
   data: Story
   className?: string
   likeBtn: React.ReactNode
   mainBtn?: React.ReactNode
   authorLink?: React.ReactNode
   image: React.ReactNode
}

export function StoryCard({
   data,
   likeBtn,
   image,
   mainBtn,
   authorLink,
   className,
}: Props) {
   const { name, description, passes } = data

   return (
      <li className={clsx(styles.wrap, className)}>
         <div className={styles.card}>
            <div className={styles.imgWrap}>{image}</div>
            <div className={styles.info}>
               <h2 className={styles.title}>{name}</h2>
               <p className={styles.desc}>{description}</p>

               <div className={styles.controls}>
                  {authorLink}

                  <div className={styles.stats}>
                     <div className={styles.statsItem}>{likeBtn}</div>

                     <div className={styles.statsItem}>
                        <EyeIcon />
                        <p>{passes}</p>
                     </div>
                  </div>

                  {mainBtn}
               </div>
            </div>
         </div>
      </li>
   )
}
