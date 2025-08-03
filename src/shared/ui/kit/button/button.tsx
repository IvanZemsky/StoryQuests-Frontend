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
   as?: T
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
   type = "button",
   uppercase = false,
   ...attributes
}: ButtonProps<T>) {
   const Component = as

   const styles = {
      container: clsx(
         "ui-button-container",
         variant,
         color,
         {
            "default-hover": defaultHover,
            "min-width": children,
            uppercase: uppercase,
         },
         className,
      ),
      content: clsx("ui-button-content", {
         icon: (leftIcon || rightIcon) && !children,
      }),
   }

   return (
      <Component ref={ref} className={styles.container} {...attributes} type={type}>
         <span className={styles.content}>
            {leftIcon}
            {children}
            {rightIcon}
         </span>
      </Component>
   )
}
