import { SceneNode, AnswerEdge } from "@/src/features/scene"
import { getCardData } from "@/src/features/story"
import { useForm, useWatch } from "react-hook-form"

type FormValues = {
   name: string
   desc: string
   img: string
}

export function useCreateStoryForm(nodes: SceneNode[], edges: AnswerEdge[]) {
   const form = useForm<FormValues>()
   const { control } = form

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin: "Curry" })

   const onSubmit = (data: FormValues) => {
      console.log({data, nodes, edges})
   }

   return { form, onSubmit, cardData }
}
