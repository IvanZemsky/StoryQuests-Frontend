import { ToggleButtonGroup } from "@/src/shared/ui"
import type { SceneAnswer } from "@/src/entities/scene"
import { ComponentProps, MouseEventHandler } from "react"

type Props = ComponentProps<"input"> & {
   data: SceneAnswer
   onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export function SelectAnswerBtn({
   data,
   className,
   onDoubleClick,
   ...attributes
}: Props) {
   const { text, nextSceneNumber, id } = data

   return (
      <ToggleButtonGroup.Button
         fillContainer
         value={nextSceneNumber}
         id={id + nextSceneNumber}
         className={className}
         onDoubleClick={onDoubleClick}
         {...attributes}
      >
         {text}
      </ToggleButtonGroup.Button>
   )
}
