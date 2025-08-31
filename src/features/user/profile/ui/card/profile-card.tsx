import { Session } from "@/src/entities/user"
import styles from "./profile-card.module.css"

type Props = {
   data: Session
}

export function ProfileCard({ data }: Props) {
   return (
      <div className={styles.profileCard}>
         <div className={styles.avatar}>{data.login[0]}</div>
         <p className={styles.login}>{data.login}</p>
      </div>
   )
}
