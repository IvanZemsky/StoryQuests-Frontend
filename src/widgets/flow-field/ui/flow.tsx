"use client"

import {
   ReactFlow,
   Background,
   Controls,
   ReactFlowProvider,
   ReactFlowProps,
} from "@xyflow/react"
import { FieldLayout } from "./flow-layout/flow-layout"
import styles from "./flow.module.css"

type Props = ReactFlowProps

export function Flow(props: Props) {
   return (
      <ReactFlowProvider>
         <FieldLayout
            title="Story creation"
            field={
               <ReactFlow {...props} fitView>
                  <Controls
                     className={styles.controls}
                     showInteractive={false}
                  ></Controls>
                  <Background className={styles.background} />
               </ReactFlow>
            }
         />
      </ReactFlowProvider>
   )
}
