"use client"

import { ControlButton, ControlButtonProps } from "@xyflow/react"
import { useState } from "react"
import FullScreenIcon from "@/src/shared/assets/icons/full-screen.svg"
import FullScreenExitIcon from "@/src/shared/assets/icons/full-screen-exit.svg"
import { MouseEvent } from "react"

type FullScreenBtnProps = ControlButtonProps

export const FullScreenBtn = ({ onClick }: FullScreenBtnProps) => {
   const [isFullScreen, setIsFullScreen] = useState(false)

   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      setIsFullScreen(!isFullScreen)
   }

   return (
      <ControlButton onClick={handleClick}>
         {isFullScreen ? <FullScreenExitIcon /> : <FullScreenIcon />}
      </ControlButton>
   )
}
