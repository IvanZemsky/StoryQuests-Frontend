"use client"

import { Flow, useFlow } from "@/src/widgets/flow-field"
import { CreateStoryLayout } from "./layout/create-story-layout"
import {
   CreateStoryFormExampleCard,
   CreateStoryFormInputs,
   CreateStoryFormLayout,
} from "@/src/features/story"
import { FormProvider } from "react-hook-form"
import { AnswerEdge, SceneNode } from "@/src/features/scene"
import { initialNodes } from "./model/flow"
import { useCreateStoryForm } from "./model/form"
import { nodeTypes, edgeTypes } from "@/src/widgets/flow-field"

export function CreateStoryPageClient() {
   const flow = useFlow<SceneNode, AnswerEdge>({ initialNodes })
   const { form, cardData, onSubmit } = useCreateStoryForm(flow.nodes, flow.edges)

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
                  <Flow {...flow} nodeTypes={nodeTypes} edgeTypes={edgeTypes} fitView />
               </CreateStoryFormLayout>
            </FormProvider>
         }
      />
   )
}
