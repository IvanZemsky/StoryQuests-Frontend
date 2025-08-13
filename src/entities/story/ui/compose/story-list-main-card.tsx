import { Button } from "@/src/shared/ui"
import { Story } from "../../model/types"
import { StoryCard } from "../story-card/story-card"
import Image from "next/image"
import Link from "next/link"
import styles from "./story-list-main-card.module.css"

type Props = {
   data: Story
}

export function StoryListMainCard({ data }: Props) {
   return (
      <StoryCard
         data={data}
         mainBtn={
            <Button as={Link} href={`/stories/${data.id}`} color="primary">
               Start
            </Button>
         }
         authorLink={
            <Link className={styles.authorLink} href={`/users/${data.author.id}`}>
               @{data.author.login}
            </Link>
         }
         likeBtn={undefined}
         image={
            <Image
               src={data.img}
               fill
               sizes="auto"
               alt={`Cover of the story "${data.name}"`}
            />
         }
      />
   )
}
