"use client"

import { useState, MouseEvent } from "react"
import { useEventListener } from "."

export function useTooltip() {
   const [isVisible, setIsVisible] = useState(false)
   const [position, setPosition] = useState({ x: 0, y: 0 })

   const handleMouseEnter = () => {
      setIsVisible(true)
   }

   const handleMouseLeave = () => {
      setIsVisible(false)
   }

   const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      const x = event.clientX
      const y = event.clientY

      setPosition({ x, y })
   }

   const updatePosition = () => {
      if (isVisible) {
         setPosition({
            x: position.x,
            y: position.y,
         })
      }
   }

   useEventListener(window, ["scroll", "resize"], updatePosition)

   return {
      isVisible,
      position,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
   }
}
