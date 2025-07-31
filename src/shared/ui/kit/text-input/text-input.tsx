"use client"

import { ComponentProps } from "react"
import "./text-input.css"
import { useInput } from "../../../lib/ui/input"
import clsx from "clsx"

type TextInputProps = {
   ref?: React.Ref<HTMLInputElement>
   variant?: "outlined" | "filled"
   counter?: boolean
} & ComponentProps<"input">

export function TextInput(props: TextInputProps, ) {
   const {
      ref,
      variant = "filled",
      counter,
      className,
      maxLength,
      onChange,
      value,
      ...attributes
   } = props

   const [inputValue, handleChange, symbolsLeft] = useInput(value, onChange, maxLength)

   return (
      <div
         className={clsx("ui-input-wrap", variant, className, {
            "with-counter": counter,
         })}
      >
         <input
            {...attributes}
            className="ui-input"
            onChange={handleChange}
            ref={ref}
            defaultValue={inputValue}
         />
         {counter && <div className="ui-input-counter">{symbolsLeft}</div>}
      </div>
   )
}
