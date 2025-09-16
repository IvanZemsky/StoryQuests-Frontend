import {
   CreateStoryFormSchema,
   CreateStoryFormValues,
   getCardData,
} from "@/src/features/story/creation-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"

export function useCreateStoryForm() {
   const form = useForm<CreateStoryFormValues>({
      resolver: zodResolver(CreateStoryFormSchema),
      defaultValues: { name: "", desc: "", img: "", tags: [] },
   })
   const { control } = form

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({
      name: name.trim(),
      description: description.trim(),
      img,
      authorLogin: "Curry",
   })

   return { form, cardData }
}
