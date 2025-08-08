import { Story, StoryCard } from "@/src/entities/story"
import styles from "./example-card.module.css"
import Image from "next/image"

type Props = {
   data: Story
}

export function CreateStoryFormExampleCard({ data }: Props) {
   return (
      <StoryCard
         className={styles.card}
         data={data}
         likeBtn={undefined}
         image={
            data.img && (
               <Image
                  src={data.img}
                  fill
                  sizes="auto"
                  alt={`Cover of the story "${data.name}"`}
               />
            )
         }
      />
   )
}
