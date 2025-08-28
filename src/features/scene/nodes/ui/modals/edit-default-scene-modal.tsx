import { EditSceneModalHeader } from "../../../edit-modal/ui/header/edit-scene-modal-header"
import { EditSceneModalLayout } from "../../../edit-modal/ui/layout/edit-scene-modal-layout"
import { SceneNodeData } from "../../model/types"
import { useEditScene } from "../../model/use-edit-answer"
import { EditSceneForm } from "../edit-scene-form/edit-scene-form"

type Props = {
   nodeId: string
   handleModalClose: () => void
}

export function EditDefaultSceneModal({ nodeId, handleModalClose }: Props) {
   const { handleDelete, handleSaveChanges } = useEditScene(nodeId)

   const handleSaveClick = (data: {
      title: string
      description: string
      img: string
   }) => {
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

         <EditSceneForm nodeId={nodeId} handleSaveClick={handleSaveClick} />
      </EditSceneModalLayout>
   )
}
