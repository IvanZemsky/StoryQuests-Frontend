import { StoryHeader } from "./header/story-header"
import styles from "./story-layout.module.css"
import { Wrapper } from "@/src/shared/ui"
import { fetchStory } from "./model/fetch-story"
import { SceneControlsProvider } from "@/src/features/scene"

type Props = {
   children: React.ReactNode
   params: Promise<{
      id: string
   }>
}

export async function StoryLayout({ children, params }: Props) {
   const { id } = await params
   const story = await fetchStory(id)

   return (
      <div className={styles.app}>
         <SceneControlsProvider>
            <StoryHeader storyName={story?.name} />
            <main>
               <Wrapper variant="both" className={styles.wrapper}>
                  {children}
               </Wrapper>
            </main>
         </SceneControlsProvider>
      </div>
   )
}
