"use client"
import { ImageLoader, TextInput, Textarea } from "@/src/shared/ui"
import { useFormContext } from "react-hook-form"
import styles from "./inputs.module.css"
import { CreateStoryFormValues } from "../../model/types"

export function CreateStoryFormInputs() {
   const {
      setValue,
      register,
      formState: { errors },
   } = useFormContext<CreateStoryFormValues>()

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <div className={styles.inputs}>
         <TextInput
            {...register("name")}
            onChange={(e) => setValue("name", e.target.value.slice(0, 50))}
            placeholder="Name"
            counter
            maxLength={50}
         />
         <p className={styles.error}>{errors.name?.message}</p>
         <Textarea
            {...register("desc")}
            onChange={(e) => setValue("desc", e.target.value.slice(0, 200))}
            placeholder="Description"
            counter
            maxLength={200}
         />
         <p className={styles.error}>{errors.desc?.message}</p>
         <ImageLoader
            {...register("img")}
            label="Cover"
            name="img"
            onError={handleImgError}
            onSuccess={(value) => setValue("img", value)}
            className={styles.imageLoad}
         />
         <p className={styles.error}>{errors.img?.message}</p>
      </div>
   )
}
