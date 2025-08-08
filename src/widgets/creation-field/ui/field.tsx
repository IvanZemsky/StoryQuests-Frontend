"use client"

import {
   ReactFlow,
   Background,
   Controls,
   ReactFlowProvider,
   ReactFlowProps,
} from "@xyflow/react"
import { FieldLayout } from "./field-layout/field-layout"
import styles from "./field.module.css"

type Props = ReactFlowProps

export function Field(props: Props) {
   return (
      <ReactFlowProvider>
         <FieldLayout
            title="Story creation"
            field={
               <ReactFlow {...props}>
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
