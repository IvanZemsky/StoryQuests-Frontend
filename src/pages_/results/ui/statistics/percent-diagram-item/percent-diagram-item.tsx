import { Tooltip } from "@/src/shared/ui"
import styles from "./percent-diagram-item.module.css"

type Props = {
   total: number
   passes: number
   index: number
   text: string
}

export function PercentDiagramItem({ total, passes, index, text }: Props) {
   const percent = Math.round((passes / total) * 100)
   const brightness = 1 - index * 0.045

   const height = percent === 0 ? "auto" : `${percent}%`

   return (
      <Tooltip content={text}>
         <div className={styles.wrap} style={{ height }}>
            <div className={styles.item} style={{ filter: `brightness(${brightness})` }}>
               {percent}%
            </div>
         </div>
      </Tooltip>
   )
}
