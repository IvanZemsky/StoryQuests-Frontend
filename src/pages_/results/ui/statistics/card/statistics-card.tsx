import { EndScene, Scene } from "@/src/entities/scene"
import styles from "./statistics-card.module.css"
import Image from "next/image"

type Props = {
   data: EndScene
}

export function StatisticsCard({ data }: Props) {
   return (
      <div className={styles.resultCard}>
         <p className={styles.totalResults}>{data.passes}</p>
         <div className={styles.imgWrap}>
            <Image src={data.img} alt="Result image" fill sizes="auto" />
         </div>
         <div>
            <p className={styles.resultCardTitle}>{data.title}</p>
            <p className={styles.resultCardDesc}>{data.description}</p>
         </div>
      </div>
   )
}
