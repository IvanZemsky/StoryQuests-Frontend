"use client"

import { useState } from "react"
import { BaseDefaultSceneNode } from "./base-nodes/base-scene-node/base-scene-node"
import { SceneNodeProps } from "../model/types"
import { EditDefaultSceneModal } from "./modals/edit-default-scene-modal"

export function EditDefaultSceneNode(props: SceneNodeProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleModalOpen = () => setIsModalOpen(true)
   const handleModalClose = () => setIsModalOpen(false)

   return (
      <BaseDefaultSceneNode
         {...props}
         onClick={handleModalOpen}
         modal={
            isModalOpen && (
               <EditDefaultSceneModal
                  nodeId={props.id}
                  handleModalClose={handleModalClose}
               />
            )
         }
      />
   )
}
