'use client'

import { Button, Modal } from "@/shared/ui"
import styles from "./styles.module.scss"
import { observer } from "mobx-react"
import { storyCreationStore } from "@/features/story"
import { ReactNode } from "react"
import { modalStore, Modals } from "@/shared/model"

type Props = {
   scene: ReactNode
}

export const PreviewModal = observer(({ scene }: Props) => {
   const { scenes } = storyCreationStore
   const { closeModal } = modalStore

   return (
      <Modal modalContent={Modals.StoryPreview} className={styles.modal}>
         {!scenes.length ? (
            <p>Loading...</p>
         ) : (
            <div className={styles.content}>
               <Button variant="filled" className={styles.closeBtn} onClick={closeModal}>
                  Close preview
               </Button>
               <div className={styles.sceneWrap}>{scene}</div>
            </div>
         )}
      </Modal>
   )
})
