"use client"

import { ComponentProps } from "react"
import "./textarea.css"
import clsx from "clsx"
import { useInput } from "../../../lib/ui/input"

type TextareaProps = {
   ref?: React.Ref<HTMLTextAreaElement>
   counter?: boolean
} & ComponentProps<"textarea">

export function Textarea({
   ref,
   counter,
   className,
   maxLength,
   onChange,
   value,
   ...attributes
}: TextareaProps) {
   const [inputValue, handleChange, symbolsLeft] = useInput(value, onChange, maxLength)

   return (
      <div className={clsx("ui-textarea-wrap", className)}>
         <textarea
            ref={ref}
            {...attributes}
            className="ui-textarea-content"
            onChange={handleChange}
            defaultValue={inputValue}
         />
         {counter && <div className="ui-textarea-counter">{symbolsLeft}</div>}
      </div>
   )
}
