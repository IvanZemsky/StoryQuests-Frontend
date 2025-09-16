"use client"

import { ReactFlow, ReactFlowProps } from "@xyflow/react"
import styles from "./styles.module.css"
import { ReactNode } from "react"

import "@xyflow/react/dist/style.css"
import type { SceneNode } from "@/src/features/scene/nodes"

type Props = {
   title: string
   scenePanel?: ReactNode
} & ReactFlowProps<SceneNode>

export const BaseStoryField = ({
   title,
   scenePanel,
   className,
   children,
   ...attributes
}: Props) => {
   return (
      <div className={[styles.content, className].join(" ")}>
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.field}>
            {scenePanel}
            <ReactFlow {...attributes} className={undefined}>
               {children}
            </ReactFlow>
         </div>
      </div>
   )
}
