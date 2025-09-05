"use client"

import { EditAnswerModal } from "./edit-answer-modal"
import { AnswerEdgeProps } from "../model/types"
import { BaseAnswerEdge } from "./base-answer-edge/base-answer-edge"
import { useModal } from "@/src/shared/lib"

export function EditAnswerEdge(props: AnswerEdgeProps) {
   const { isOpen, open, close } = useModal()

   return (
      <BaseAnswerEdge
         {...props}
         onClick={open}
         modal={isOpen && <EditAnswerModal edgeId={props.id} handleModalClose={close} />}
      />
   )
}
