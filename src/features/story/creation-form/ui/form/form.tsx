import styles from "./form.module.css"

type Props = {
   onSubmit: React.FormEventHandler<HTMLFormElement>
   inputs: React.ReactNode
   exampleCard: React.ReactNode
   previewBtn?: React.ReactNode
   submitBtn: React.ReactNode
   children?: React.ReactNode
   tagsInput?: React.ReactNode
}

export function CreateStoryFormLayout({
   onSubmit,
   inputs,
   exampleCard,
   previewBtn,
   submitBtn,
   tagsInput,
   children,
}: Props) {
   return (
      <form onSubmit={onSubmit} className={styles.form}>
         <div className={styles.formInputsWrap}>
            <div className={styles.inputs}>{inputs}</div>
            {exampleCard}
         </div>

         {tagsInput}

         {children}

         {previewBtn}

         {submitBtn}
      </form>
   )
}
