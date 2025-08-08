"use client"

import { ComponentProps } from "react"
import "./text-input.css"
import { useInput } from "../../../lib/ui/input"
import clsx from "clsx"

type TextInputProps = {
   ref?: React.Ref<HTMLInputElement | null>
   variant?: "outlined" | "filled"
   counter?: boolean
} & ComponentProps<"input">

export function TextInput(props: TextInputProps) {
   const {
      ref,
      variant = "filled",
      counter,
      className,
      maxLength,
      onChange,
      defaultValue,
      ...attributes
   } = props

   const [inputValue, handleChange, symbolsLeft] = useInput(
      defaultValue,
      maxLength,
      onChange,
   )

   return (
      <div
         className={clsx("ui-input-wrap", variant, className, {
            "with-counter": counter,
         })}
      >
         <input
            ref={ref}
            className={clsx("ui-input", className)}
            {...attributes}
            onChange={handleChange}
            value={inputValue}
         />
         {counter && <div className="ui-input-counter">{symbolsLeft}</div>}
      </div>
   )
}
