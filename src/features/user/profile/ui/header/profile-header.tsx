import { ReactNode } from "react"
import styles from "./profile-header.module.css"

type Props = {
   title: string
   signOutBtn?: ReactNode
}

export function ProfileHeader({ title, signOutBtn }: Props) {
   return (
      <header className={styles.header}>
         <h1 className={styles.title}>{title}</h1> {signOutBtn}
      </header>
   )
}
