"use client"

import { useCallback, useEffect, useRef } from "react"
import { useEventListener } from "./events"

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
   const ref = useRef<T>(null)

   const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
         callback()
      }
   }

   useEventListener("document", ["mouseup", "touchend"], handleClickOutside)

   return ref
}

export function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" })
}

export function useDebounce<T extends (...args: any[]) => void>(
   callback: T,
   delay: number = 1000,
) {
   const timeout = useRef<NodeJS.Timeout>(undefined)

   useEffect(() => () => clearTimeout(timeout.current), [])

   const debouncedCallback = useCallback(
      (...args: Parameters<T>) => {
         clearTimeout(timeout.current)
         timeout.current = setTimeout(() => {
            callback(...args)
         }, delay)
      },
      [delay],
   )

   const clear = () => {
      clearTimeout(timeout.current)
   }

   return [debouncedCallback, clear] as const
}
