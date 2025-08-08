"use client"

import styles from "./form.module.css"
import { Button, } from "@/src/shared/ui"

type Props = {
   onSubmit: React.FormEventHandler<HTMLFormElement>
   inputs: React.ReactNode
   exampleCard: React.ReactNode
   children?: React.ReactNode
}

export function CreateStoryFormLayout({
   onSubmit,
   inputs,
   exampleCard,
   children,
}: Props) {
   return (
      <form onSubmit={onSubmit} className={styles.form}>
         <div className={styles.formInputsWrap}>
            <div className={styles.inputs}>{inputs}</div>
            {exampleCard}
         </div>

         {children}

         <Button className={styles.submitBtn} type="submit" variant="gradient">
            Create
         </Button>
      </form>
   )
}
