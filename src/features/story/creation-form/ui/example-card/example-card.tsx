import { Story, StoryCard } from "@/src/entities/story"
import styles from "./example-card.module.css"
import Image from "next/image"
import { Button } from "@/src/shared/ui"

type Props = {
   data: Story
}

export function CreateStoryFormExampleCard({ data }: Props) {
   return (
      <StoryCard
         className={styles.card}
         data={data}
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
         likeBtn={undefined}
         mainBtn={<Button color="primary">Start</Button>}
         authorLink={<p className={styles.authorLink}>@{data.author.login}</p>}
      />
   )
}
