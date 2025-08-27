import { Story } from "@/src/entities/story"
import styles from "./preview-card.module.css"
import Image from "next/image"
import { Button } from "@/src/shared/ui"
import Link from "next/link"

type Props = {
   data: Story
}

export function StoryPreviewCard({ data }: Props) {
   return (
      <div className={styles.card}>
         <div className={styles.imgWrap}>
            <Image
               src={data.img}
               fill
               sizes="auto"
               alt={`Cover of the story "${data.name}"`}
            />
         </div>
         <div className={styles.info}>
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.scenes}>{data.sceneCount} scenes</p>
            <p className={styles.desc}>{data.description}</p>
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
