"use client"

import { useState } from "react"

export function useModal(initialState = false) {
   const [isOpen, setIsOpen] = useState(initialState)

   const open = () => setIsOpen(true)
   const close = () => setIsOpen(false)

   return { isOpen, open, close }
}
