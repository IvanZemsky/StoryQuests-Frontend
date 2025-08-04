import { Wrapper } from "@/src/shared/ui"
import styles from "./stories-layout.module.css"

type Props = {
   filters: React.ReactNode
   list: React.ReactNode
   pagination: React.ReactNode
}

export function StoriesPageLayout({ filters, list, pagination }: Props) {
   return (
      <Wrapper className={styles.wrap}>
         <header>{filters}</header>
         {list}
         <div className={styles.pagination}>{pagination}</div>
      </Wrapper>
   )
}
