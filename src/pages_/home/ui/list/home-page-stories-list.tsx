import styles from "./home-page-stories-list.module.css"
import { StoriesFiltersParams, StoriesList, storyService } from "@/src/entities/story"
import { Button } from "@/src/shared/ui"
import Link from "next/link"
import ArrowRightLongIcon from "@/src/shared/assets/icons/arrow-right-long.svg"
import { StoryListMainCard } from "@/src/widgets/story-list-main-card"

type Props = {
   filters: Partial<StoriesFiltersParams & { limit: number }>
   title: React.ReactNode
}

export async function HomePageStoriesList({ filters, title }: Props) {
   const stories = await storyService.find(filters)

   const { limit: _, ...rest } = filters

   return (
      <section className={styles.section}>
         <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <Button
               as={Link}
               href={`/stories?${new URLSearchParams(rest).toString()}`}
               rightIcon={<ArrowRightLongIcon />}
            >
               More stories
            </Button>
         </div>
         <StoriesList
            data={stories?.data}
            renderItem={(data) => <StoryListMainCard key={data.id} data={data} />}
            isError={!stories}
         />
      </section>
   )
}
