import { Wrapper } from "@/src/shared/ui"
import styles from "./home-page-layout.module.css"

type Props = {
   hero: React.ReactNode
   storiesSections: React.ReactNode
   storyCreationExample: React.ReactNode
}

export function HomePageLayout({ hero, storiesSections, storyCreationExample }: Props) {
   return (
      <Wrapper className={styles.wrapper}>
         {hero}
         {storiesSections}
         {storyCreationExample}
      </Wrapper>
   )
}
