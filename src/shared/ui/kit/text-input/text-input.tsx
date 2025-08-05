"use client"

import { ComponentProps } from "react"
import "./text-input.css"
import { useInput } from "../../../lib/ui/input"
import clsx from "clsx"

type TextInputProps = {
   ref: React.RefObject<HTMLInputElement | null>
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
      ...attributes
   } = props

   const [handleChange, symbolsLeft] = useInput(ref, onChange, maxLength)

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
         />
         {counter && <div className="ui-input-counter">{symbolsLeft}</div>}
      </div>
   )
}
