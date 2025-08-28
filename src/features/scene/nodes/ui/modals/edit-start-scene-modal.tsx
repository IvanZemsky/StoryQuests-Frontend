import { EditSceneModalHeader } from "../../../edit-modal/ui/header/edit-scene-modal-header"
import { EditSceneModalLayout } from "../../../edit-modal/ui/layout/edit-scene-modal-layout"
import { useEditScene } from "../../model/use-edit-answer"
import { EditSceneForm } from "../edit-scene-form/edit-scene-form"

type Props = {
   nodeId: string
   handleModalClose: () => void
}

export function EditStartSceneModal({ nodeId, handleModalClose }: Props) {
   const { handleSaveChanges } = useEditScene(nodeId)

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
            handleModalClose={handleModalClose}
            hasDeleteBtn={false}
         />

         <EditSceneForm nodeId={nodeId} handleSaveClick={handleSaveClick} />
      </EditSceneModalLayout>
   )
}
