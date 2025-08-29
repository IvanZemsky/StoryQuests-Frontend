"use client"

import { Button, Modal } from "@/src/shared/ui"
import styles from "./story-preview-modal.module.css"

type Props = {
   scene: React.ReactNode
   handleCloseModal: () => void
}

export function StoryPreviewModal({ scene, handleCloseModal }: Props) {
   return (
      <Modal className={styles.modal}>
         <div className={styles.content}>
            <Button
               variant="filled"
               className={styles.closeBtn}
               onClick={handleCloseModal}
            >
               Close preview
            </Button>
            <div className={styles.sceneWrap}>{scene}</div>
         </div>
      </Modal>
   )
}
