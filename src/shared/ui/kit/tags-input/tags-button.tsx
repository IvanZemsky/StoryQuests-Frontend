"use client"

import clsx from "clsx"
import { ButtonCheck, ButtonCheckProps } from "../button-check/button-check"
import { useTagsInputContext } from "./context"

export const TagsButton = ({ children, ...props }: Omit<ButtonCheckProps, "name">) => {
   const { value, onChange, name } = useTagsInputContext()

   return (
      <ButtonCheck
         {...props}
         name={name}
         onChange={onChange}
         checked={value.includes(props.value as string)}
         value={props.value}
         type="checkbox"
         className={clsx("ui-tags-btn", props.className)}
      >
         {children}
      </ButtonCheck>
   )
}
