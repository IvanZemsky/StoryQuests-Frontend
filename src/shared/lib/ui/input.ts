"use client"

import { useState, ChangeEvent, InputHTMLAttributes, ChangeEventHandler } from "react"

export const useInput = (
   value: InputHTMLAttributes<HTMLInputElement>["value"],
   callback?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
   maxLength?: number,
) => {
   const [inputValue, setInputValue] = useState(String(value || ""))

   const symbolsLeft = maxLength ? maxLength - inputValue.length : null

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (maxLength) {
         const newValue = event.target.value.slice(0, maxLength)
         setInputValue(newValue)
      }
      callback?.(event)
   }

   return [inputValue, handleChange, symbolsLeft] as const
}
