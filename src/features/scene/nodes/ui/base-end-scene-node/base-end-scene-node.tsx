"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./base-end-scene-node.module.css"
import { ReactNode } from "react"
import { SceneNodeProps } from "../../model/types"

type Props = SceneNodeProps & {
   modal?: ReactNode
}

export const BaseEndSceneNode = ({ data, modal }: Props) => {
   const title = data.title || "Title of ending"

   return (
      <>
         <Handle type="target" position={Position.Top} className={styles.handle} />
         <div className={styles.topBorder}></div>
         <div className={styles.content}>
            {data.img && (
               <div className={styles.imgWrap}>
                  <img src={data.img} alt="illustration" />
               </div>
            )}
            <p className={styles.title}>{title}</p>
         </div>

         {modal}
      </>
   )
}
