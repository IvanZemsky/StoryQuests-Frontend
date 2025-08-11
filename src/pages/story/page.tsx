import { sceneService } from "@/src/entities/scene"
import { Wrapper } from "@/src/shared/ui"
import { Scene } from "@/src/widgets/scene"
import styles from "./page.module.css"

export type StoryPageProps = {
   params: Promise<{
      id: string
   }>
}

export async function StoryPage({ params }: StoryPageProps) {
   const { id } = await params
   const scenes = await sceneService.findByStoryID(id)

   if (!scenes) {
      return <div>Story not found</div>
   }

   return (
      <Wrapper variant="both" className={styles.wrapper}>
         <Scene data={scenes} firstSceneNumber={1} />
      </Wrapper>
   )
}
