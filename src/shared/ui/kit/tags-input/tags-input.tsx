"use client"

import { ComponentProps } from "react"
import { TagsInputContext } from "./context"
import { TagsButton } from "./tags-button"
import "./tags-input.css"
import clsx from "clsx"

type Props = Omit<ComponentProps<"input">, "value"> & {
   label?: React.ReactNode
   value: string[]
}

export function TagsInput({ value, onChange, name, className, label, children }: Props) {
   return (
      <TagsInputContext value={{ value, name, onChange }}>
         <div className={clsx("ui-tags-input", className)}>
            {label}
            <div className="ui-tags-input-items">{children}</div>
         </div>
      </TagsInputContext>
   )
}

TagsInput.Button = TagsButton
