"use client"

import clsx from "clsx"
import { ButtonCheck, ButtonCheckProps } from "../button-check/button-check"
import { useToggleButtonGroupContext } from "./context"

export const ToggleButtonGroupItem = ({
   children,
   ...props
}: Omit<ButtonCheckProps, "name">) => {
   const { value, onChange, name } = useToggleButtonGroupContext()

   return (
      <ButtonCheck
         {...props}
         name={name}
         onChange={onChange}
         checked={value === props.value}
         value={props.value}
         className={clsx("ui-toggle-button-group-item", props.className)}
      >
         {children}
      </ButtonCheck>
   )
}
