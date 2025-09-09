"use client"

import { useTooltip } from "@/src/shared/lib/ui/tooltip"
import "./tooltip.css"
import clsx from "clsx"

type Props = {
   content?: React.ReactNode
   children: React.ReactNode
   className?: string
}

export function Tooltip({ content, children, className }: Props) {
   const { isVisible, position, handleMouseEnter, handleMouseLeave, handleMouseMove } =
      useTooltip()

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
               className={"ui-tooltip-content"}
               style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
               }}
            >
               {content}
            </div>
         )}
      </div>
   )
}
