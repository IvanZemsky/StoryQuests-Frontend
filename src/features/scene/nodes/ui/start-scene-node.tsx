"use client"

import { useState } from "react"
import { EditStartSceneModal } from "./modals/edit-start-scene-modal"
import { SceneNodeProps } from "../model/types"
import { BaseStartSceneNode } from "./base-nodes/base-start-scene-node/base-start-scene-node"

export function EditStartSceneNode(props: SceneNodeProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleModalOpen = () => setIsModalOpen(true)
   const handleModalClose = () => setIsModalOpen(false)

   return (
      <BaseStartSceneNode
         {...props}
         onClick={handleModalOpen}
         modal={
            isModalOpen && (
               <EditStartSceneModal
                  nodeId={props.id}
                  handleModalClose={handleModalClose}
               />
            )
         }
      />
   )
}
