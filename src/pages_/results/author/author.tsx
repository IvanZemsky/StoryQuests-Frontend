import { Story } from "@/src/entities/story"
import styles from "./author.module.css"
import Link from "next/link"

type Props = {
   author: Story["author"]
}

export function ResultsAuthor({ author }: Props) {
   return (
      <p className={styles.author}>
         Author: <Link href={`/users/${author.id}`}>@{author.login}</Link>
      </p>
   )
}
