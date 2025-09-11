"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./base-start-scene-node.module.css"
import { MouseEventHandler, ReactNode } from "react"
import { SceneNodeProps } from "../../../model/types"
import ArroBottomIcon from "@/src/shared/assets/icons/arrow-bottom.svg"

type Props = SceneNodeProps & {
   modal?: ReactNode
   onClick: MouseEventHandler<HTMLDivElement>
}

export const BaseStartSceneNode = ({ data, modal, onClick }: Props) => {
   const title = data.title || "Title of scene"

   return (
      <>
         <div className={styles.node} onClick={onClick}>
            <div className={styles.content}>
               {data.img && (
                  <div className={styles.imgWrap}>
                     <img src={data.img} alt="illustration" />
                  </div>
               )}
               <p className={styles.title}>{title}</p>
            </div>
            <Handle
               type="source"
               position={Position.Bottom}
               className={styles.sourceHandle}
            >
               <ArroBottomIcon/>
            </Handle>
         </div>

         {modal}
      </>
   )
}
