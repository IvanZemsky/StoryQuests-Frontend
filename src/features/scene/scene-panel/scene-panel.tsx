import { DNDNode } from "../nodes/model/types"
import { DND_XYFLOW_ID } from "../nodes/model/use-drag-and-drop-nodes"
import styles from "./scene-panel.module.css"
import { DragEvent } from "react"

export const ScenePanel = () => {
   const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: DNDNode) => {
      if (event.dataTransfer) {
         event.dataTransfer.setData(DND_XYFLOW_ID, nodeType)
         event.dataTransfer.effectAllowed = "move"
      }
   }

   return (
      <div className={styles.panel}>
         <div
            className={styles.scene}
            draggable
            onDragStart={(event) => onDragStart(event, "base")}
         >
            Scene
         </div>
         <div
            className={styles.scene}
            draggable
            onDragStart={(event) => onDragStart(event, "end")}
         >
            End Scene
         </div>
      </div>
   )
}
