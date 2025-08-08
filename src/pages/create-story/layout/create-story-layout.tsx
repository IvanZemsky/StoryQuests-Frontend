"use client"

import { Wrapper } from "@/src/shared/ui"
import styles from "./create-story-layout.module.css"

type Props = {
   title: string
   form: React.ReactNode
}

export function CreateStoryLayout({ form, title }: Props) {
   return (
      <Wrapper className={styles.wrapper}>
         <h1 className={styles.title}>{title}</h1>
         {form}
      </Wrapper>
   )
}
