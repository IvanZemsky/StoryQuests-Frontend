import { storyService } from "@/src/entities/story"
import { StoryHeader } from "./header/story-header"
import styles from "./story-layout.module.css"

type Props = {
   children: React.ReactNode
   params: Promise<{
      id: string
   }>
}

export async function StoryLayout({ children, params }: Props) {
   const { id } = await params
   const story = await storyService.findByID(id)

   return (
      <div className={styles.app}>
         <StoryHeader storyName={story?.name} />
         <main>{children}</main>
      </div>
   )
}
