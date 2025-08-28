import { Button, TextInput } from "@/src/shared/ui"
import { FormEventHandler, useState } from "react"
import styles from "./edit-answer-form.module.css"

type Props = {
   handleSaveClick: (text: string) => void
}

export function EditAnswerForm({ handleSaveClick }: Props) {
   const [input, setInput] = useState("")

   const handleSave = () => {
      handleSaveClick(input)
   }

   const handleInputChange: FormEventHandler<HTMLInputElement> = (event) => {
      setInput(event.currentTarget.value)
   }

   return (
      <form className={styles.form}>
         <TextInput
            counter
            maxLength={35}
            value={input}
            onChange={handleInputChange}
            placeholder="Text of answer"
            name="answer-name"
         />
         <Button onClick={handleSave}>Save</Button>
      </form>
   )
}
