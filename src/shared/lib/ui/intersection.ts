"use client"

import { useCallback, RefCallback } from "react"

export function useCursorRef(onIntersect: () => void) {
   const cursorRef: RefCallback<HTMLDivElement> = useCallback(
      (el) => {
         const observer = new IntersectionObserver(
            (entries) => {
               if (entries[0].isIntersecting) {
                  onIntersect()
               }
            },
            { threshold: 0.5 },
         )

         if (el) {
            observer.observe(el)

            return () => {
               observer.disconnect()
            }
         }
      },
      [onIntersect],
   )

   return cursorRef
}
