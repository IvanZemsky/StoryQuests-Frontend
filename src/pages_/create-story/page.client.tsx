"use client"

import { useFlow } from "@/src/widgets/flow-field"
import { CreateStoryLayout } from "./ui/layout/create-story-layout"
import {
   CreateStoryFormInputs,
   CreateStoryFormLayout,
   PreviewBtn,
   StoryPreviewModal,
   useStoryPreview,
} from "@/src/features/story"
import { FormProvider } from "react-hook-form"
import {
   type AnswerEdge,
   createAnswerEdge,
   type SceneNode,
   useCreateScenesFromFlowData,
   useValidateSceneNodesData,
} from "@/src/features/scene"
import { initialNodes } from "./model/flow"
import { useCreateStoryForm } from "./model/form"
import { CreateStoryFormExampleCard } from "./ui/example-card/example-card"
import { ReactFlowProvider } from "@xyflow/react"
import { CreationField } from "./ui/creation-field"
import { Scene } from "@/src/widgets/scene"

export function CreateStoryPageClient() {
   const { setNodes, ...flow } = useFlow<SceneNode, AnswerEdge>({
      edgeFactory: createAnswerEdge,
      initialNodes,
   })
   const { form, cardData, onSubmit } = useCreateStoryForm(flow.nodes, flow.edges)
   const { scenes, handleCreateScenes } = useCreateScenesFromFlowData(
      flow.nodes,
      flow.edges,
   )

   const previewModal = useStoryPreview(flow.nodes, flow.edges, handleCreateScenes)

   return (
      <CreateStoryLayout
         title="Story creation"
         form={
            <FormProvider {...form}>
               <CreateStoryFormLayout
                  onSubmit={form.handleSubmit(onSubmit)}
                  inputs={<CreateStoryFormInputs />}
                  previewBtn={<PreviewBtn onClick={previewModal.openPreview} />}
                  exampleCard={<CreateStoryFormExampleCard data={cardData} />}
               >
                  <ReactFlowProvider>
                     <CreationField setNodes={setNodes} {...flow} />
                  </ReactFlowProvider>
               </CreateStoryFormLayout>
            </FormProvider>
         }
         previewModal={
            previewModal.isPreviewOpen && (
               <StoryPreviewModal
                  scene={
                     scenes?.length && (
                        <Scene data={scenes} firstSceneNumber={1} disableEndLink />
                     )
                  }
                  handleCloseModal={previewModal.closePreview}
               />
            )
         }
      />
   )
}
