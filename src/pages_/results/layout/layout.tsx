import { Wrapper } from "@/src/shared/ui"
import styles from "./layout.module.css"

type Props = {
   header?: React.ReactNode
   author?: React.ReactNode
   resultCard?: React.ReactNode
   results?: React.ReactNode
}

export function ResultsLayout({ header, author, resultCard, results }: Props) {
   return (
      <Wrapper>
         <div className={styles.content}>
            {header}
            {author}
            {resultCard}
            {results}
         </div>
      </Wrapper>
   )
}
