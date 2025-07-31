"use client"

import { ComponentProps } from "react"
import { ToggleButtonGroupContext } from "./context"
import { ToggleButtonGroupItem } from "./toggle-button-group-item"
import clsx from "clsx"
import "./toggle-button-group.css"

type Props = ComponentProps<"input"> & {
   variant?: "row" | "column"
}

export function ToggleButtonGroup(props: Props) {
   const { variant = "row", className, name, onChange, value, children } = props

   return (
      <ToggleButtonGroupContext value={{ value, name, onChange }}>
         <div className={clsx("ui-toggle-button-group", variant, className)}>
            {children}
         </div>
      </ToggleButtonGroupContext>
   )
}

ToggleButtonGroup.Button = ToggleButtonGroupItem
