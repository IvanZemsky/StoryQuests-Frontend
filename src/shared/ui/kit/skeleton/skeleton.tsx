import { ComponentProps } from "react"
import "./skeleton.css"
import clsx from "clsx"

type Props = ComponentProps<"div">

export function Skeleton({ className, children, ...props }: Props) {
   return (
      <div className={clsx("ui-skeleton", className)} {...props}>
         {children}
      </div>
   )
}
