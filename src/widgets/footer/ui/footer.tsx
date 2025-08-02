import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import Link from "next/link"

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.desc}>
                  <Logo />
                  <p className={styles.descText}>
                     Create and share your own story quests
                  </p>
               </div>
               <nav className={styles.links}>
                  <Link href="/">Home</Link>
                  <Link href="/stories">Stories</Link>
                  <Link href="/create">Create</Link>
               </nav>
            </div>
         </Wrapper>
      </footer>
   )
}
