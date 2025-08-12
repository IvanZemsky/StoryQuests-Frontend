"use client"

import {
   useState,
   ChangeEvent,
   ChangeEventHandler,
   InputHTMLAttributes,
} from "react"

export const useInput = (
   initialValue: InputHTMLAttributes<HTMLInputElement>["value"] = "",
   maxLength?: number,
   onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
) => {
   const [inputValue, setInputValue] = useState(String(initialValue) || "")

   const symbolsLeft = maxLength ? maxLength - inputValue.length : null

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(event.target.value.slice(0, maxLength))
      onChange?.(event)
   }

   return [inputValue, handleChange, symbolsLeft] as const
}
