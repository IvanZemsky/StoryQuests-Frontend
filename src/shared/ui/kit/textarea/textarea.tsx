"use client"

import { ComponentProps } from "react"
import "./textarea.css"
import clsx from "clsx"
import { useInput } from "../../../lib/ui/input"

type TextareaProps = {
   ref: React.RefObject<HTMLTextAreaElement | null>
   counter?: boolean
} & ComponentProps<"textarea">

export function Textarea({
   ref,
   counter,
   className,
   maxLength,
   onChange,
   ...attributes
}: TextareaProps) {
   const [handleChange, symbolsLeft] = useInput(ref, onChange, maxLength)

   return (
      <div className={clsx("ui-textarea-wrap", className)}>
         <textarea
            ref={ref}
            className={clsx("ui-textarea-content", className)}
            {...attributes}
            onChange={handleChange}
         />
         {counter && <div className="ui-textarea-counter">{symbolsLeft}</div>}
      </div>
   )
}
