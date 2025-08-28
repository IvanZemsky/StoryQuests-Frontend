"use client"

import { useState } from "react"
import { EditAnswerModal } from "./edit-answer-modal"
import { AnswerEdgeProps } from "../model/types"
import { BaseAnswerEdge } from "./base-answer-edge/base-answer-edge"

export function EditAnswerEdge(props: AnswerEdgeProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)

   console.log(isModalOpen)

   const handleModalOpen = () => setIsModalOpen(true)
   const handleModalClose = () => setIsModalOpen(false)

   return (
      <BaseAnswerEdge
         {...props}
         onClick={handleModalOpen}
         modal={
            isModalOpen && (
               <EditAnswerModal edgeId={props.id} handleModalClose={handleModalClose} />
            )
         }
      />
   )
}
