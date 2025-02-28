"use client"

import { usePathname } from "next/navigation"

export function useActiveLink(href: string, styles: string): string | "" {
   const pathname = usePathname()

   if (!pathname) {
      return ""
   }

   const isActive = href === "/" ? pathname === href : pathname.startsWith(href)

   const activeStyle = isActive ? styles : ""

   return activeStyle
}
