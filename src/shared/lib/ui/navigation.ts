"use client"

import { usePathname } from "next/navigation"

export function useActiveLink(href: string, activeCSSClass: string) {
   const pathname = usePathname()

   if (!pathname) return null

   const isActive = href === "/" ? pathname === href : pathname.startsWith(href)
   const activeStyle = isActive ? activeCSSClass : null

   return activeStyle
}
