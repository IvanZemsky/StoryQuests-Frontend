import { Wrapper } from "@/src/shared/ui"
import styles from "./create-story-layout.module.css"

type Props = {
   title: string
   form: React.ReactNode
   modals: React.ReactNode
}

export function CreateStoryLayout({ form, title, modals }: Props) {
   return (
      <Wrapper className={styles.wrapper}>
         <h1 className={styles.title}>{title}</h1>
         {form}
         {modals}
      </Wrapper>
   )
}
