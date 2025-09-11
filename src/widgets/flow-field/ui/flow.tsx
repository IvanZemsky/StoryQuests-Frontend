"use client"

import { ReactFlow, Background, Controls, ReactFlowProps } from "@xyflow/react"
import { FieldLayout } from "./flow-layout/flow-layout"
import styles from "./flow.module.css"
import { FullScreenBtn } from "./full-screen-btn/full-screen-btn"
import { useState } from "react"
import clsx from "clsx"

type Props = ReactFlowProps & {
   panel?: React.ReactNode
}

export function Flow(props: Props) {
   const [fullScreenMode, setFullScreenMode] = useState(false)

   const handleFullScreenClick = () => setFullScreenMode(!fullScreenMode)

   return (
      <FieldLayout
         className={clsx({ [styles.fullScreenMode]: fullScreenMode })}
         title="Story creation"
         panel={props.panel}
         field={
            <ReactFlow {...props} maxZoom={4} fitView>
               <Controls className={styles.controls} showInteractive={false}>
                  <FullScreenBtn onClick={handleFullScreenClick} />
               </Controls>
               <Background className={styles.background} />
            </ReactFlow>
         }
      />
   )
}
