"use client"

import { Field } from "@/src/widgets/creation-field"
import { CreateStoryLayout } from "./layout/create-story-layout"
import {
   CreateStoryFormExampleCard,
   CreateStoryFormInputs,
   CreateStoryFormLayout,
   getCardData,
} from "@/src/features/story"
import { FormProvider, useForm, useWatch } from "react-hook-form"

type FormValues = {
   name: string
   desc: string
   img: string
}

export function CreateStoryPageClient() {
   const form = useForm<FormValues>()
   const { control } = form

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin: "Curry" })

   const onSubmit = (data: FormValues) => console.log(data)

   return (
      <CreateStoryLayout
         title="Story creation"
         form={
            <FormProvider {...form}>
               <CreateStoryFormLayout
                  onSubmit={form.handleSubmit(onSubmit)}
                  inputs={<CreateStoryFormInputs />}
                  exampleCard={<CreateStoryFormExampleCard data={cardData} />}
               >
                  <Field />
               </CreateStoryFormLayout>
            </FormProvider>
         }
      />
   )
}
