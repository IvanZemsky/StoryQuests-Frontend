"use client"

import {
   ReactFlow,
   Background,
   Controls,
   ReactFlowProps,
} from "@xyflow/react"
import { FieldLayout } from "./flow-layout/flow-layout"
import styles from "./flow.module.css"

type Props = ReactFlowProps & {
   panel?: React.ReactNode
}

export function Flow(props: Props) {
   return (
      <FieldLayout
         title="Story creation"
         panel={props.panel}
         field={
            <ReactFlow {...props} fitView>
               <Controls className={styles.controls} showInteractive={false} />
               <Background className={styles.background} />
            </ReactFlow>
         }
      />
   )
}
