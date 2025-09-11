"use client"

import { TagsInput, TagsLabel } from "@/src/shared/ui"
import { ChangeEvent } from "react"
import { useFormContext, useWatch } from "react-hook-form"
import { CreateStoryFormValues } from "../../model/types"
import { MAX_TAGS, TAGS_VALUES } from "../../model/tags"
import styles from "./tags-input.module.css"

export function CreateStoryTagsInput() {
   const { setValue, register, getValues, control } =
      useFormContext<CreateStoryFormValues>()

   const tags = useWatch({ control, name: "tags" })

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const prev = getValues("tags")
      const newTag = event.target.value
      let newValue = []

      if (prev.includes(newTag)) {
         newValue = prev.filter((item) => item !== newTag)
      } else {
         newValue = [...prev, newTag]
      }

      if (newValue.length > MAX_TAGS) return

      setValue("tags", newValue)
   }

   return (
      <TagsInput
         label={
            <TagsLabel className={styles.tagsLabel}>
               Tags{" "}
               <span>
                  {tags.length}/{MAX_TAGS}
               </span>
            </TagsLabel>
         }
         {...register("tags")}
         onChange={handleChange}
         value={tags}
      >
         {TAGS_VALUES.map((tag) => (
            <TagsInput.Button key={tag.id} {...tag}>
               {tag.text}
            </TagsInput.Button>
         ))}
      </TagsInput>
   )
}
