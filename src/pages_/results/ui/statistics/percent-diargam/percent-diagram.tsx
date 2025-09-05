import { EndScene } from "@/src/entities/scene"
import styles from "./percent-diagram.module.css"
import { PercentDiagramItem } from "../percent-diagram-item/percent-diagram-item"

type Props = {
   total: number
   data: EndScene[]
}

export function PercentDiagram({ data, total }: Props) {
   return (
      <div className={styles.percentDiagram}>
         {data.map((item, index) => (
            <PercentDiagramItem
               total={total}
               text={item.title}
               key={item.id}
               index={index + 1}
               passes={item.passes}
            />
         ))}
      </div>
   )
}
