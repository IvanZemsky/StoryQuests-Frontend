"use client"

import { Wrapper } from "@/src/shared/ui"
import styles from "./create-story-layout.module.css"
import { useOnBeforeUnload } from "@/src/shared/lib"

type Props = {
   title: string
   form: React.ReactNode
   modals: React.ReactNode
}

export function CreateStoryLayout({ form, title, modals }: Props) {
   // useOnBeforeUnload()

   return (
      <Wrapper className={styles.wrapper}>
         <h1 className={styles.title}>{title}</h1>
         {form}
         {modals}
      </Wrapper>
   )
}
