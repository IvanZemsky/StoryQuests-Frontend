"use client"

import { Button, ImageLoader, Textarea, TextInput } from "@/src/shared/ui"
import styles from "./edit-scene-form.module.css"
import { useSceneAnswerForm } from "../../model/use-edit-scene-form"

type Props = {
   nodeId: string
   handleSaveClick: (data: { title: string; description: string; img: string }) => void
}

export function EditSceneForm({ nodeId, handleSaveClick }: Props) {
   const { form, setForm, handleSave } = useSceneAnswerForm(nodeId, handleSaveClick)

   return (
      <form className={styles.form}>
         <TextInput
            className={styles.titleInput}
            counter
            maxLength={35}
            defaultValue={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Text"
            name="scene-title"
         />
         <Textarea
            className={styles.descInput}
            counter
            maxLength={200}
            placeholder="Description"
            defaultValue={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            name="scene-desc"
         />
         <ImageLoader
            className={styles.illustration}
            label="Illustration"
            value={form.img}
            onSuccess={(value) => setForm({ ...form, img: value })}
            onError={() => setForm({ ...form, img: "" })}
         />
         <Button onClick={handleSave}>Save</Button>
      </form>
   )
}
