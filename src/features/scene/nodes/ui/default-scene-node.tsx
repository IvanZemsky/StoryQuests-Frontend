"use client"

import { useState } from "react"
import { BaseDefaultSceneNode } from "./base-nodes/base-scene-node/base-scene-node"
import { SceneNodeProps } from "../model/types"
import { EditDefaultSceneModal } from "./modals/edit-default-scene-modal"
import { useModal } from "@/src/shared/lib"

export function EditDefaultSceneNode(props: SceneNodeProps) {
   const { isOpen, open, close } = useModal()

   return (
      <BaseDefaultSceneNode
         {...props}
         onClick={open}
         modal={
            isOpen && <EditDefaultSceneModal nodeId={props.id} handleModalClose={close} />
         }
      />
   )
}
