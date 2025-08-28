"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

type Props = {
   selector: string
   children: React.ReactNode
}

export function Portal({ children, selector }: Props) {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      return () => setMounted(false)
   }, [])

   if (mounted) {
      return createPortal(children, document.querySelector(selector) as HTMLElement)
   }

   return null
}
