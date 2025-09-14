import Link from "next/link"
import styles from "./story-header.module.css"
import { Wrapper } from "@/src/shared/ui"
import { ToggleVoiceoverBtn } from "@/src/features/scene"

type Props = {
   storyName?: string | null
}

export function StoryHeader({ storyName }: Props) {
   return (
      <header className={styles.header}>
         <Wrapper className={styles.wrapper}>
            <div className={styles.content}>
               <h1>
                  <Link className={styles.link} href={"/"}>
                     StoryQuests
                  </Link>{" "}
                  <span>-</span> {storyName || "Story not found"}
               </h1>
               <nav className={styles.nav}>
                  <ul className={styles.list}>
                     <ToggleVoiceoverBtn />
                     <Link href={"/stories"}>Exit</Link>
                  </ul>
               </nav>
            </div>
         </Wrapper>
      </header>
   )
}
