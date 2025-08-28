"use client"

import { useState } from "react"
import { SceneNodeProps } from "../model/types"
import { BaseEndSceneNode } from "./base-nodes/base-end-scene-node/base-end-scene-node"
import { EditDefaultSceneModal } from "./modals/edit-default-scene-modal"

export function EditEndSceneNode(props: SceneNodeProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleModalOpen = () => setIsModalOpen(true)
   const handleModalClose = () => setIsModalOpen(false)

   return (
      <BaseEndSceneNode
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
