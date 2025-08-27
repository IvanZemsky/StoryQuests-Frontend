import { Story } from "@/src/entities/story"
import styles from "./preview-card.module.css"
import Image from "next/image"
import { Button } from "@/src/shared/ui"
import Link from "next/link"
import { PreviewInfoPanel } from "../preview-info-panel/preview-info-panel"
import HeartIcon from "@/src/shared/assets/icons/heart.svg"

type Props = {
   data: Story
}

export function StoryPreviewCard({ data }: Props) {
   return (
      <div className={styles.card}>
         {data.isLiked && (
            <div className={styles.isLiked}>
               <HeartIcon />
            </div>
         )}

         <div className={styles.imgWrap}>
            <Image
               src={data.img}
               fill
               sizes="auto"
               alt={`Cover of the story "${data.name}"`}
            />
         </div>
         <div className={styles.info}>
            <h2 className={styles.title}>{data.name}</h2>
            <p className={styles.sceneCount}>{data.sceneCount} scenes</p>
            <p className={styles.desc}>{data.description}</p>

            <PreviewInfoPanel {...data} />

            <Button
               className={styles.startBtn}
               as={Link}
               href={`/stories/${data.id}?play`}
               replace
            >
               Let's go!
            </Button>
         </div>
      </div>
   )
}
