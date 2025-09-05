import { EndScene } from "@/src/entities/scene"
import styles from "./statistics.module.css"
import { StatisticsCard } from "./card/statistics-card"
import { PercentDiagram } from "./percent-diargam/percent-diagram"

type Props = {
   total: number
   data: EndScene[]
}

export function Statistics({ data, total }: Props) {
   return (
      <div className={styles.wrap}>
         <div className={styles.cards}>
            {data.map((result) => (
               <StatisticsCard key={result.id} data={result} />
            ))}
         </div>
         <PercentDiagram total={total} data={data} />
      </div>
   )
}
