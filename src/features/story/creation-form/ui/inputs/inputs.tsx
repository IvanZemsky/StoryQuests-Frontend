"use client"
import { ImageLoader, TextInput, Textarea } from "@/src/shared/ui"
import { useFormContext } from "react-hook-form"
import styles from "./inputs.module.css"

export function CreateStoryFormInputs() {
   const { setValue, register } = useFormContext()

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <>
         <TextInput
            {...register("name", { maxLength: 50, required: true })}
            onChange={(e) => setValue("name", e.target.value.slice(0, 50))}
            placeholder="Name"
            counter
            maxLength={50}
         />
         <Textarea
            {...register("desc", { maxLength: 200 })}
            onChange={(e) => setValue("name", e.target.value.slice(0, 50))}
            placeholder="Description"
            counter
            maxLength={200}
         />

         <ImageLoader
            label="Cover"
            name="img"
            onError={handleImgError}
            onSuccess={(value) => setValue("img", value)}
            className={styles.imageLoad}
         />
      </>
   )
}
