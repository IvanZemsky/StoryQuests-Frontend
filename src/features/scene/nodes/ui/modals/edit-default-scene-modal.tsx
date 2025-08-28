import { EditSceneModalHeader } from "../../../edit-modal/ui/header/edit-scene-modal-header"
import { EditSceneModalLayout } from "../../../edit-modal/ui/layout/edit-scene-modal-layout"
import { SceneNodeData } from "../../model/types"
import { useEditScene } from "../../model/use-edit-answer"

type Props = {
   nodeId: string
   handleModalClose: () => void
}

export function EditDefaultSceneModal({ nodeId, handleModalClose }: Props) {
   const { handleDelete, handleSaveChanges } = useEditScene(nodeId)

   const handleSaveClick = (data: SceneNodeData) => {
      handleSaveChanges(data)
      handleModalClose()
   }

   return (
      <EditSceneModalLayout onOverlayClick={handleModalClose}>
         <EditSceneModalHeader
            title="Scene"
            handleDelete={handleDelete}
            handleModalClose={handleModalClose}
         />

         
      </EditSceneModalLayout>
   )
}
