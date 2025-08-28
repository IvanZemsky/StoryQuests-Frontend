import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import TrashIcon from "@/src/shared/assets/icons/trash.svg"
import styles from "./edit-scene-modal-header.module.css"
import { Button } from "@/src/shared/ui"

type Props = {
   title: string
   hasDeleteBtn?: boolean
   handleDelete?: () => void
   handleModalClose: () => void
}

export const EditSceneModalHeader = ({
   hasDeleteBtn = true,
   title,
   handleDelete,
   handleModalClose,
}: Props) => {
   return (
      <header className={styles.header}>
         <h3 className={styles.title}>{title}</h3>
         <div className={styles.buttons}>
            {hasDeleteBtn && (
               <Button
                  variant="filled"
                  leftIcon={<TrashIcon />}
                  onClick={handleDelete}
                  className={styles.removeBtn}
               />
            )}

            <Button
               variant="filled"
               leftIcon={<CrossIcon />}
               onClick={handleModalClose}
               className={styles.closeBtn}
            />
         </div>
      </header>
   )
}
