import { ButtonLink, SwitchFade } from "@/shared/ui"
import { Scene, SceneNumber } from "../../model/types"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg"
import { ReactNode } from "react"
import Image from "next/image"

const { Stories, Results } = PageRoutes

type Props = {
   selectAnswer: ReactNode
   currentSceneNumber: SceneNumber | null
   data: Omit<Scene, "answers">
   disabledLink?: boolean
}

export const BaseScene = ({
   currentSceneNumber,
   data,
   selectAnswer,
   disabledLink = false,
}: Props) => {
   const { title, description, type, img, storyId } = data

   return (
      <SwitchFade switchKey={currentSceneNumber} timeout={300}>
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

               {type === "default" ? (
                  selectAnswer
               ) : (
                  <ButtonLink
                     variant="filled"
                     href={`${Stories}/${storyId}${Results}`}
                     className={styles.endBtn}
                     leftIcon={<ArrowRightIcon />}
                     defaultHover={false}
                     disabled={disabledLink}
                  />
               )}
            </div>
            {type === "end" && <div className={styles.bottomLine}></div>}
         </div>
      </SwitchFade>
   )
}
