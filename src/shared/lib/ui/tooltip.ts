"use client"

import { useState, MouseEvent, useEffect } from "react"
import { useEventListener } from "./events"

type Point = {
   x: number
   y: number
}

export function useTooltip(ref: React.RefObject<HTMLDivElement | null>) {
   const padding = 20
   const [isVisible, setIsVisible] = useState(false)
   const [position, setPosition] = useState<Point | null>(null)

   const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
      setCursorPosition(event)
      setIsVisible(true)
   }

   const handleMouseLeave = () => {
      setIsVisible(false)
   }

   const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      setCursorPosition(event)
   }

   const updatePosition = () => {
      if (isVisible && position) {
         setPosition({
            x: position.x,
            y: position.y,
         })
      }
   }

   useEventListener("window", ["scroll", "resize"], updatePosition)

   function setCursorPosition(event: MouseEvent<HTMLDivElement>) {
      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return

      let x = event.clientX
      let y = event.clientY
      const cursorX = event.clientX
      const cursorY = event.clientY

      const viewportRect = getViewportRect(padding)
      const tooltipWidth = rect.width
      const tooltipHeight = rect.height

      const isTooltipReachedLeftEnd = cursorX - tooltipWidth / 2 < viewportRect.left
      const isTooltipReachedRightEnd =
         cursorX + tooltipWidth / 2 + padding > viewportRect.right

      if (isTooltipReachedLeftEnd) {
         x = viewportRect.left + tooltipWidth / 2
      } else if (isTooltipReachedRightEnd) {
         x = viewportRect.right - tooltipWidth / 2 - padding
      }

      const isTooltipReachedTopEnd = cursorY - tooltipHeight < viewportRect.top
      const isTooltipReachedBottomEnd = cursorY + tooltipHeight > viewportRect.bottom

      if (isTooltipReachedTopEnd) {
         y = viewportRect.top + tooltipHeight
      } else if (isTooltipReachedBottomEnd) {
         y = cursorY - tooltipHeight
      }

      setPosition({ x, y })
   }

   return {
      isVisible,
      position,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
   }
}

function getViewportRect(padding: number) {
   return {
      x: padding,
      y: padding,
      width: window.innerWidth - padding * 2,
      height: window.innerHeight - padding * 2,
      top: padding,
      left: padding,
      right: window.innerWidth - padding,
      bottom: window.innerHeight - padding,
   }
}
