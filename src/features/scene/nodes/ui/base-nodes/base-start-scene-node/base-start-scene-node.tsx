"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./base-start-scene-node.module.css"
import { MouseEventHandler, ReactNode } from "react"
import { SceneNodeProps } from "../../../model/types"

type Props = SceneNodeProps & {
   modal?: ReactNode
   onClick: MouseEventHandler<HTMLDivElement>
}

export const BaseStartSceneNode = ({ data, modal, onClick }: Props) => {
   const title = data.title || "Title of scene"

   return (
      <>
         <div className={styles.content} onClick={onClick}>
            {data.img && (
               <div className={styles.imgWrap}>
                  <img src={data.img} alt="illustration" />
               </div>
            )}
            <p className={styles.title}>{title}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.handle} />

         {modal}
      </>
   )
}
