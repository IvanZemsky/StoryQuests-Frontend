"use client"

import { useState, ChangeEvent, ChangeEventHandler } from "react"

export const useInput = (
   inputRef: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>,
   callback?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
   maxLength?: number,
) => {
   const [symbolsLeft, setSymbolsLeft] = useState(maxLength)

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!inputRef.current) return
      
      if (maxLength && event.target.value.length > maxLength) {
         inputRef.current.value = event.target.value.slice(0, maxLength)
         setSymbolsLeft(maxLength - event.target.value.length)
      }

      inputRef.current.value = event.target.value

      callback?.(event)
   }

   return [handleChange, symbolsLeft] as const
}
