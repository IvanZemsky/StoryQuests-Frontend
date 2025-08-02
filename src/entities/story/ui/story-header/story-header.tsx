import Link from "next/link"
import styles from "./style.module.css"
import { Wrapper } from "@/src/shared/ui"

type Props = {
   storyName?: string | null
}

export const StoryHeader = ({ storyName }: Props) => {
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
                  <ul>
                     <Link href={"/stories"}>Exit</Link>
                  </ul>
               </nav>
            </div>
         </Wrapper>
      </header>
   )
}
