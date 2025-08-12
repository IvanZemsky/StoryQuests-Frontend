import { Button } from "@/src/shared/ui"
import styles from "./page-layout.module.css"
import ArrowLeftLongIcon from "@/src/shared/assets/icons/arrow-left-long.svg"
import Link from "next/link"

type Props = {
   children: React.ReactNode
   title: React.ReactNode
}

export function AuthPageLayout({ children, title }: Props) {
   return (
      <main className={styles.content}>
         <div className={styles.leftWrap}>
            <Button
               as={Link}
               href="/"
               className={styles.homeLink}
               leftIcon={<ArrowLeftLongIcon />}
            />

            <div className={styles.authWrap}>
               <h1 className={styles.title}>{title}</h1>
               {children}
            </div>
         </div>

         <div className={styles.rightWrap}>
            <div className={styles.rightContent}>
               <div className={styles.titleWrap}>
                  <h2>Story quests</h2>
                  <hr />
                  <p>A website with interactive text story quests</p>
               </div>
            </div>
         </div>
      </main>
   )
}
