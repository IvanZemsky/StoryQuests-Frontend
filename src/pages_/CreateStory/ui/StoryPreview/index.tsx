"use client"

import { observer } from "mobx-react"
import { useEffect } from "react"
import { modalStore, Modals } from "@/shared/model"
import { storyCreationStore, NotValidStoryModal, PreviewModal } from "@/features/story"
import { PreviewScene } from "../PreviewScene"

export const StoryPreview = observer(() => {
   const { isValid, validate, scenes } = storyCreationStore
   const { opened } = modalStore

   useEffect(() => {
      if (opened === Modals.StoryPreview) {
         validate()
      }
   }, [opened, validate])

   if (!isValid) {
      return <NotValidStoryModal />
   }

   return <PreviewModal scene={<PreviewScene scenes={scenes} />} />
})
