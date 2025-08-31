import { Wrapper } from "@/src/shared/ui"
import styles from "./profile-layout.module.css"
import { ReactNode } from "react"

type Props = {
   header: ReactNode
   userCard: ReactNode
   storiesList: ReactNode
}

export function UserPagelayout({ header, userCard, storiesList }: Props) {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            {header}
            {userCard}
            {storiesList}
         </div>
      </Wrapper>
   )
}
