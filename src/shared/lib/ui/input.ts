"use client"

import {
   useState,
   ChangeEvent,
   ChangeEventHandler,
   InputHTMLAttributes,
   useEffect,
} from "react"

export const useInput = (
   initialValue: InputHTMLAttributes<HTMLInputElement>["value"] = "",
   maxLength?: number,
   onClick?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
) => {
   const [inputValue, setInputValue] = useState(String(initialValue) || "")

   useEffect(() => {
      setInputValue(String(initialValue) || "")
   }, [initialValue])

   const symbolsLeft = maxLength ? maxLength - inputValue.length : null

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(event.target.value.slice(0, maxLength))
      onClick?.(event)
   }

   return [inputValue, handleChange, symbolsLeft] as const
}
