"use client"

import { useState } from "react"

export function useModal(
   initialState = false,
   { onOpen, onClose }: { onOpen?: () => boolean; onClose?: () => boolean } = {},
) {
   const [isOpen, setIsOpen] = useState(initialState)

   const open = () => {
      if (onOpen && !onOpen()) return
      setIsOpen(true)
   }

   const close = () => {
      if (onClose && !onClose()) return
      setIsOpen(false)
   }

   return { isOpen, open, close }
}
