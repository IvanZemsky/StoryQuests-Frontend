"use client"

import { useEffect } from "react"

export function useEventListener<K extends keyof WindowEventMap>(
   targetName: "window",
   events: K[],
   callback: (event: WindowEventMap[K]) => void,
): void

export function useEventListener<K extends keyof DocumentEventMap>(
   targetName: "document",
   events: K[],
   callback: (event: DocumentEventMap[K]) => void,
): void

export function useEventListener(
   targetName: "window" | "document",
   events: string[],
   callback: (event: Event) => void,
): void {
   useEffect(() => {
      const target = getTarget(targetName)

      if (typeof window !== "undefined" && target) {
         events.forEach((event) => target.addEventListener(event, callback))

         return () => {
            events.forEach((event) => target.removeEventListener(event, callback))
         }
      }
   }, [events, targetName, callback])
}

function getTarget(targetName: "window" | "document") {
   switch (targetName) {
      case "window":
         return typeof window !== "undefined" ? window : undefined
      case "document":
         return typeof document !== "undefined" ? document : undefined
      default:
         return undefined
   }
}
