import { Modal, ModalProps } from "@/src/shared/ui"
import styles from "./edit-scene-modal-layout.module.css"
import clsx from "clsx"

type Props = ModalProps & {
   variant?: "center" | "left"
   children: React.ReactNode
}

export const EditSceneModalLayout = ({
   variant = "left",
   onOverlayClick,
   children,
}: Props) => {
   return (
      <Modal
         onOverlayClick={onOverlayClick}
         className={clsx(styles.modal, styles[variant])}
      >
         <div className={styles.wrap}>
            <div className={styles.content}>{children}</div>
         </div>
      </Modal>
   )
}
