import { Scene } from "@/src/entities/scene"
import styles from "./scene-layout.module.css"
import Image from "next/image"

type Props = {
   selectAnswer: React.ReactNode
   data: Scene
}

export function SceneLayout({ data, selectAnswer }: Props) {
   const { title, description, type, img, storyId } = data

   return (
      <div className={styles.content}>
         {type === "end" && <div className={styles.topLine}></div>}
         <h2 className={styles.title}>{title}</h2>
         {!!description && <p className={styles.desc}>{description}</p>}

         <div className={styles.controls}>
            <div className={styles.imgWrap}>
               <Image
                  src={img}
                  fill
                  sizes="auto"
                  className={styles.illustration}
                  alt="illustration"
               />
            </div>

            {selectAnswer}
         </div>
         {type === "end" && <div className={styles.bottomLine}></div>}
      </div>
   )
}
