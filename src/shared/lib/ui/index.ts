"use client"

import { useCallback, useEffect, useRef } from "react"

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
   const ref = useRef<T>(null)

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
         }
      }

      document.addEventListener("mouseup", handleClickOutside)
      document.addEventListener("touchend", handleClickOutside)

      return () => {
         document.removeEventListener("mouseup", handleClickOutside)
         document.removeEventListener("touchend", handleClickOutside)
      }
   }, [callback])

   return ref
}

export function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" })
}

export function useDebounce<T extends (...args: any[]) => void>(
   callback: T,
   delay: number = 1000,
) {
   const timeout = useRef<NodeJS.Timeout>(null)

   useEffect(
      () => () => {
         if (timeout.current) clearTimeout(timeout.current)
      },
      [],
   )

   const debouncedCallback = useCallback(
      (...args: Parameters<T>) => {
         if (timeout.current) clearTimeout(timeout.current)
         timeout.current = setTimeout(() => {
            callback(...args)
         }, delay)
      },
      [delay],
   )

   const clear = () => {
      if (timeout.current) clearTimeout(timeout.current)
   }

   return [debouncedCallback, clear] as const
}
