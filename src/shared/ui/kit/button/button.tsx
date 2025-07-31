import { ComponentProps, ReactNode } from "react"
import "./button.css"
import clsx from "clsx"

export type ButtonProps<T extends React.ElementType> = {
   ref?: React.Ref<T>
   variant?: "outlined" | "filled" | "gradient"
   color?: "primary" | "secondary"
   defaultHover?: boolean
   uppercase?: boolean
   leftIcon?: ReactNode
   rightIcon?: ReactNode
   as?: React.ElementType
} & ComponentProps<T>

export function Button<T extends React.ElementType>({
   ref,
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
         ref={ref}
         className={clsx(
            "ui-button-container",
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
            className={clsx("ui-button-content", {
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
