"use client"

import { useRef } from "react"
import { useTooltip } from "../../../lib/ui/tooltip"
import "./tooltip.css"
import clsx from "clsx"

type Props = {
   content?: React.ReactNode
   children: React.ReactNode
   className?: string
}

export function Tooltip({ content, children, className }: Props) {
   const tooltipRef = useRef<HTMLDivElement>(null)
   const { isVisible, position, handleMouseEnter, handleMouseLeave, handleMouseMove } =
      useTooltip(tooltipRef)

   return (
      <div
         className={clsx("ui-tooltip", className)}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onMouseMove={handleMouseMove}
      >
         {children}
         {isVisible && (
            <div
               ref={tooltipRef}
               className={clsx("ui-tooltip-content", { visible: isVisible })}
               style={{
                  left: position ? `${position.x}px` : -9999,
                  top: position ? `${position.y}px` : -9999,
               }}
            >
               {content}
            </div>
         )}
      </div>
   )
}
