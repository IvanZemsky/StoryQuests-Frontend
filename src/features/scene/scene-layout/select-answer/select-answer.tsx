import { ToggleButtonGroup, Button } from "@/src/shared/ui"
import ArrowRightIcon from "@/src/shared/assets/icons/arrow-right.svg"
import styles from "./select-answer.module.css"
import { ChangeEvent, useState } from "react"
import { SceneAnswer } from "@/src/entities/scene"
import { SelectAnswerBtn } from "./select-answer-btn"

type Props = {
   answers: SceneAnswer[] | null
   onSelect: (nextSceneId: string) => void
}

export function SelectAnswer({ answers, onSelect }: Props) {
   const [nextSceneId, setNextSceneId] = useState<string | undefined>(undefined)

   const handleSetSceneCLick = () => {
      if (nextSceneId) {
         onSelect(nextSceneId)
      }
   }

   const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNextSceneId(event.target.value)
   }

   return (
      <div className={styles.wrap}>
         <ToggleButtonGroup
            variant="column"
            className={styles.select}
            onChange={handleAnswerChange}
            value={nextSceneId}
         >
            {answers?.map((answer) => (
               <SelectAnswerBtn
                  key={answer.id + answer.nextSceneId}
                  className={styles.answer}
                  onDoubleClick={handleSetSceneCLick}
                  data={answer}
               />
            ))}
         </ToggleButtonGroup>
         <Button
            variant="filled"
            className={styles.nextSceneBtn}
            leftIcon={<ArrowRightIcon />}
            defaultHover={false}
            onClick={handleSetSceneCLick}
         />
      </div>
   )
}
