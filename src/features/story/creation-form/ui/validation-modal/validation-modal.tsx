"use client"

import { Modal, Button } from "@/src/shared/ui"
import styles from "./validation-modal.module.css"

type Props = {
   handleClose: () => void
}

export function CreateStoryValidationModal ({ handleClose }: Props) {
   return (
      <Modal className={styles.modal}>
         <div className={styles.content}>
            <h3>Story is not ready yet</h3>
            <p className={styles.desc}>Check if it satisfies the conditions:</p>
            <ul>
               <li>Every scene must have title and image</li>
               <li>Every answer must not be empty</li>
            </ul>
            <Button onClick={handleClose}>Ok</Button>
         </div>
      </Modal>
   )
}
