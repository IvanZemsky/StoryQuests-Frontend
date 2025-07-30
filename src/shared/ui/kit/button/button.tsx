import { Component, ComponentProps, ReactNode } from "react"
import "./button.css"
import clsx from "clsx"
import Link from "next/link"

export type ButtonProps<T extends React.ElementType> = {
   variant?: "outlined" | "filled" | "gradient"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   uppercase?: boolean
   leftIcon?: ReactNode
   rightIcon?: ReactNode
   as?: React.ElementType
   children?: React.ReactNode
   className: string
} & ComponentProps<T>

export function Button<T extends React.ElementType>({
   variant = "outlined",
   color = "secondary",
   defaultHover = true,
   leftIcon,
   rightIcon,
   children,
   className,
   as = "button",
   uppercase = false,
   ...attributes
}: ButtonProps<T>) {
   const Component = as

   return (
      <Component
         className={clsx(
            "container",
            variant,
            color,
            {
               defaultHover: defaultHover,
               minWidth: children,
               uppercase: uppercase,
            },
            className,
         )}
         {...attributes}
      >
         <span
            className={clsx("content", {
               icon: (leftIcon || rightIcon) && !children,
            })}
         >
            {leftIcon}
            {children}
            {rightIcon}
         </span>
      </Component>
   )
}
