import { SceneNode, AnswerEdge } from "@/src/features/scene"
import { validateSceneFlowData } from "@/src/features/scene/create-scenes/validation"
import { CreateStoryFormValues, getCardData } from "@/src/features/story"
import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"

export function useCreateStoryForm(nodes: SceneNode[], edges: AnswerEdge[]) {
   const [isValid, setIsValid] = useState(true)

   const form = useForm<CreateStoryFormValues>()
   const { control } = form

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin: "Curry" })


   return { form, cardData }
}
