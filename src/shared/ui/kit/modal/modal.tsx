"use client"

import { ComponentProps, MouseEvent } from "react"
import "./modal.css"
import clsx from "clsx"
import { Portal } from "../portal/portal"

export type ModalProps = {
   onOverlayClick?: (...args: unknown[]) => void
} & ComponentProps<"div">

export function Modal({
   children,
   className,
   onOverlayClick,
   ...attributes
}: ModalProps) {
   const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      onOverlayClick?.()
   }

   const stopCloseEventPropagation = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
   }

   return (
      <Portal selector="#modal">
         <div
            className={clsx("ui-modal-overlay", className)}
            {...attributes}
            onClick={handleOverlayClick}
         >
            <div className="ui-modal-wrap" onClick={stopCloseEventPropagation}>
               {children}
            </div>
         </div>
      </Portal>
   )
}
