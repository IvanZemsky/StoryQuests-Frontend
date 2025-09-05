"use client"

import { useFlow } from "@/src/widgets/flow-field"
import { CreateStoryLayout } from "./ui/layout/create-story-layout"
import {
   CreateStoryFormInputs,
   CreateStoryFormLayout,
   CreateStoryFormSubmitBtn,
   CreateStoryValidationModal,
   PreviewBtn,
   useStoryPreview,
} from "@/src/features/story"
import { FormProvider } from "react-hook-form"
import {
   type AnswerEdge,
   createAnswerEdge,
   type SceneNode,
   useCreateScenesFromFlowData,
} from "@/src/features/scene"
import { initialNodes } from "./model/flow"
import { useCreateStoryForm } from "./model/form"
import { CreateStoryFormExampleCard } from "./ui/example-card/example-card"
import { ReactFlowProvider } from "@xyflow/react"
import { CreationField } from "./ui/creation-field"
import { StoryPreview } from "./ui/preview"
import { useCreateStory } from "./model/create"
import { useModal } from "@/src/shared/lib"

export function CreateStoryPageClient() {
   const { setNodes, ...flow } = useFlow<SceneNode, AnswerEdge>({
      edgeFactory: createAnswerEdge,
      initialNodes,
   })
   const { scenes, handleCreateScenes } = useCreateScenesFromFlowData(
      flow.nodes,
      flow.edges,
   )

   const validationModal = useModal()

   const preview = useStoryPreview({
      nodes: flow.nodes,
      edges: flow.edges,
      handleCreateScenes,
      onInvalidScenes: validationModal.open,
   })

   const { form, cardData } = useCreateStoryForm(flow.nodes, flow.edges)
   const { createStory, isPending } = useCreateStory({
      nodes: flow.nodes,
      edges: flow.edges,
      onInvalidScenes: validationModal.open,
   })

   return (
      <CreateStoryLayout
         title="Story creation"
         form={
            <FormProvider {...form}>
               <CreateStoryFormLayout
                  onSubmit={form.handleSubmit(createStory)}
                  inputs={<CreateStoryFormInputs />}
                  previewBtn={<PreviewBtn onClick={preview.open} />}
                  exampleCard={<CreateStoryFormExampleCard data={cardData} />}
                  submitBtn={<CreateStoryFormSubmitBtn disabled={isPending} />}
               >
                  <ReactFlowProvider>
                     <CreationField setNodes={setNodes} {...flow} />
                  </ReactFlowProvider>
               </CreateStoryFormLayout>
            </FormProvider>
         }
         modals={
            <>
               <StoryPreview
                  open={preview.isOpen}
                  scenes={scenes}
                  close={preview.close}
               />
               {validationModal.isOpen && (
                  <CreateStoryValidationModal handleClose={validationModal.close} />
               )}
            </>
         }
      />
   )
}
