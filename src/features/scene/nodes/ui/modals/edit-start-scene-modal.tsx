import { EditSceneModalHeader } from "../../../edit-modal/ui/header/edit-scene-modal-header"
import { EditSceneModalLayout } from "../../../edit-modal/ui/layout/edit-scene-modal-layout"
import { SceneNodeData } from "../../model/types"
import { useEditScene } from "../../model/use-edit-answer"

type Props = {
   nodeId: string
   handleModalClose: () => void
}

export function EditStartSceneModal({ nodeId, handleModalClose }: Props) {
   const { handleSaveChanges } = useEditScene(nodeId)

   const handleSaveClick = (data: SceneNodeData) => {
      handleSaveChanges(data)
      handleModalClose()
   }

   return (
      <EditSceneModalLayout onOverlayClick={handleModalClose}>
         <EditSceneModalHeader
            title="Scene"
            handleModalClose={handleModalClose}
            hasDeleteBtn={false}
         />

         
      </EditSceneModalLayout>
   )
}
