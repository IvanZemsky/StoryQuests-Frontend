"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function useActiveLink(href: string, activeCSSClass: string) {
   const pathname = usePathname()

   if (!pathname) return null

   const isActive = href === "/" ? pathname === href : pathname.startsWith(href)
   const activeStyle = isActive ? activeCSSClass : null

   return activeStyle
}

export function useOnBeforeUnload() {
   useEffect(() => {
      const onBeforeUnload = (e: BeforeUnloadEvent) => {
         e.preventDefault()
         return true
      }

      window.addEventListener("beforeunload", onBeforeUnload)

      return () => {
         window.removeEventListener("beforeunload", onBeforeUnload)
      }
   }, [])
}
