"use client"

import { useFlow } from "@/src/widgets/flow-field"
import { CreateStoryLayout } from "./ui/layout/create-story-layout"
import {
   CreateStoryFormInputs,
   CreateStoryFormLayout,
   CreateStoryFormSubmitBtn,
   CreateStoryTagsInput,
   CreateStoryValidationModal,
   PreviewBtn,
   useStoryPreview,
} from "@/src/features/story"
import { FormProvider } from "react-hook-form"
import { type SceneNode } from "@/src/features/scene/nodes"
import { createAnswerEdge, type AnswerEdge } from "@/src/features/scene/edges"
import { initialNodes } from "./model/flow"
import { useCreateStoryForm } from "./model/form"
import { CreateStoryFormExampleCard } from "./ui/example-card/example-card"
import { ReactFlowProvider } from "@xyflow/react"
import { CreationField } from "./ui/creation-field"
import { StoryPreview } from "./ui/preview"
import { useCreateStory } from "./model/create"
import { useModal, useOnBeforeUnload } from "@/src/shared/lib"
import { useCreateScenesFromFlowData } from "@/src/features/scene/create-scenes"

export function CreateStoryPageClient() {
   useOnBeforeUnload()

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

   const { form, cardData } = useCreateStoryForm()
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
                  exampleCard={<CreateStoryFormExampleCard data={cardData} />}
                  inputs={<CreateStoryFormInputs />}
                  tagsInput={<CreateStoryTagsInput />}
                  previewBtn={<PreviewBtn onClick={preview.open} />}
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
