"use client"

import { useFlow } from "@/src/widgets/flow-field"
import { CreateStoryLayout } from "./ui/layout/create-story-layout"
import { CreateStoryFormInputs, CreateStoryFormLayout } from "@/src/features/story"
import { FormProvider } from "react-hook-form"
import { AnswerEdge, createAnswerEdge, SceneNode } from "@/src/features/scene"
import { initialNodes } from "./model/flow"
import { useCreateStoryForm } from "./model/form"
import { CreateStoryFormExampleCard } from "./ui/example-card/example-card"
import { ReactFlowProvider } from "@xyflow/react"
import { CreationField } from "./ui/creation-field"

export function CreateStoryPageClient() {
   const { setNodes, ...flow } = useFlow<SceneNode, AnswerEdge>({
      edgeFactory: createAnswerEdge,
      initialNodes,
   })
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
                  <ReactFlowProvider>
                     <CreationField setNodes={setNodes} {...flow} />
                  </ReactFlowProvider>
               </CreateStoryFormLayout>
            </FormProvider>
         }
      />
   )
}
