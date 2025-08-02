import Link from "next/link"
import ProfileIcon from "@/src/shared/assets/icons/profile.svg"
import styles from "./styles.module.css"

export function ProfileLink() {
   return (
      <Link href="/profile" className={styles.link}>
         <ProfileIcon />
      </Link>
   )
}
