import { HTMLAttributes } from "react"
import "./wrapper.css"
import clsx from "clsx"

type Props = HTMLAttributes<HTMLDivElement> & {
   variant?: "vertical" | "horizontal" | "both"
}

export function Wrapper({
   variant = "horizontal",
   children,
   className,
   ...attributes
}: Props) {
   return (
      <div className={clsx("ui-wrapper", variant, className)} {...attributes}>
         {children}
      </div>
   )
}
