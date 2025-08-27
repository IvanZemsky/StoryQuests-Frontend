import { Button } from "@/src/shared/ui"
import { Story } from "@/src/entities/story"
import { StoryCard } from "@/src/entities/story"
import Image from "next/image"
import Link from "next/link"
import styles from "./story-list-main-card.module.css"
import { StoryLikeBtn } from "@/src/features/story"

type Props = {
   data: Story
}

export function StoryListMainCard({ data }: Props) {
   return (
      <StoryCard
         data={data}
         image={
            <Image
               src={data.img}
               fill
               sizes="auto"
               alt={`Cover of the story "${data.name}"`}
            />
         }
         authorLink={
            <Link className={styles.authorLink} href={`/users/${data.author.id}`}>
               @{data.author.login}
            </Link>
         }
         likeBtn={
            <StoryLikeBtn storyId={data.id} likes={data.likes} isLiked={data.isLiked} />
         }
         mainBtn={
            <Button as={Link} href={`/stories/${data.id}`} color="primary">
               Start
            </Button>
         }
      />
   )
}
