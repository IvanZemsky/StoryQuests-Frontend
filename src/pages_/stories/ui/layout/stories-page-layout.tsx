import { Wrapper } from "@/src/shared/ui"
import styles from "./stories-layout.module.css"

type Props = {
   filters: React.ReactNode
   list: React.ReactNode
}

export function StoriesPageLayout({ filters, list }: Props) {
   return (
      <Wrapper className={styles.wrap}>
         <header>{filters}</header>
         {list}
      </Wrapper>
   )
}
