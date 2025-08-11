import { ToggleButtonGroup, Button } from "@/src/shared/ui"
import ArrowRightIcon from "@/src/shared/assets/icons/arrow-right.svg"
import styles from "./select-answer.module.css"
import { ChangeEvent, useState } from "react"
import { SceneAnswer } from "@/src/entities/scene"
import { SelectAnswerBtn } from "./select-answer-btn"

type Props = {
   answers: SceneAnswer[] | null
   onSelect: (nextSceneNumber: number) => void
}

export function SelectAnswer({ answers, onSelect }: Props) {
   const [nextSceneNumber, setNextSceneNumber] = useState<number | undefined>(undefined)

   const handleSetSceneCLick = () => {
      if (nextSceneNumber) {
         onSelect(nextSceneNumber)
      }
   }

   const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNextSceneNumber(Number(event.target.value))
   }

   return (
      <div className={styles.wrap}>
         <ToggleButtonGroup
            variant="column"
            className={styles.select}
            onChange={handleAnswerChange}
            value={nextSceneNumber}
         >
            {answers?.map((answer) => (
               <SelectAnswerBtn
                  key={answer.id + answer.nextSceneNumber}
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
