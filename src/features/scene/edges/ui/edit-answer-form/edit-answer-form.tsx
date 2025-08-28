import { Button, TextInput } from "@/src/shared/ui"
import styles from "./edit-answer-form.module.css"
import { useEditAnswerForm } from "../../model/use-edit-answer-form"

type Props = {
   edgeId: string
   handleSaveClick: (text: string) => void
}

export function EditAnswerForm({ edgeId, handleSaveClick }: Props) {
   const { input, handleInputChange, handleSave } = useEditAnswerForm(
      edgeId,
      handleSaveClick,
   )

   return (
      <form className={styles.form}>
         <TextInput
            counter
            maxLength={35}
            defaultValue={input}
            onChange={handleInputChange}
            placeholder="Text of answer"
            name="answer-name"
         />
         <Button onClick={handleSave}>Save</Button>
      </form>
   )
}
