import { EditSceneModalHeader } from "../../edit-modal/ui/header/edit-scene-modal-header"
import { EditSceneModalLayout } from "../../edit-modal/ui/layout/edit-scene-modal-layout"
import { EditAnswerForm } from "./edit-answer-form/edit-answer-form"
import { useEditAnswer } from "../model/use-edit-answer"

type Props = {
   edgeId: string
   handleModalClose: () => void
}

export function EditAnswerModal({ edgeId, handleModalClose }: Props) {
   const { handleDelete, handleSaveChanges } = useEditAnswer(edgeId)

   const handleSaveClick = (text: string) => {
      handleSaveChanges(text)
      handleModalClose()
   }

   return (
      <EditSceneModalLayout variant="center" onOverlayClick={handleModalClose}>
         <EditSceneModalHeader
            title="Answer"
            handleDelete={handleDelete}
            handleModalClose={handleModalClose}
         />

         <EditAnswerForm edgeId={edgeId} handleSaveClick={handleSaveClick} />
      </EditSceneModalLayout>
   )
}
