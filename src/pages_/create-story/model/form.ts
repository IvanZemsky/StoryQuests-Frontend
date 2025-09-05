import { SceneNode, AnswerEdge } from "@/src/features/scene"
import { CreateStoryFormValues, getCardData } from "@/src/features/story"
import { useForm, useWatch } from "react-hook-form"

export function useCreateStoryForm(nodes: SceneNode[], edges: AnswerEdge[]) {
   const form = useForm<CreateStoryFormValues>()
   const { control } = form

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin: "Curry" })


   return { form, cardData }
}
