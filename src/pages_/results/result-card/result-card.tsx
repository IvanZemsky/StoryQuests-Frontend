import { Scene } from "@/src/entities/scene"
import styles from "./result-card.module.css"
import Image from "next/image"

type Props = {
   data: Scene
}

export function ResultCard({ data }: Props) {
   return (
      <div className={styles.card}>
         <div className={styles.imgWrap}>
            <Image src={data.img} alt={"Cover of result"} fill sizes="auto" />
         </div>
         <div className={styles.info}>
            <h2 className={styles.title}>
               <p className={styles.label}>Your result: </p>
               <p>{data.title}</p>
            </h2>
         </div>
      </div>
   )
}
