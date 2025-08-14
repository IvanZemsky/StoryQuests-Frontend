import { Story, StoryCard } from "@/src/entities/story"
import styles from "./example-card.module.css"
import Image from "next/image"
import { Button } from "@/src/shared/ui"
import { StoryLikeBtn } from "@/src/features/story"

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
         likeBtn={<StoryLikeBtn storyId={data.id} likes={data.likes} />}
         mainBtn={<Button color="primary">Start</Button>}
         authorLink={<p className={styles.authorLink}>@{data.author.login}</p>}
      />
   )
}
