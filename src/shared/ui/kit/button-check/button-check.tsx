import { ComponentProps, MouseEventHandler, Ref } from "react"
import "./button-check.css"
import { Button } from "../button/button"
import clsx from "clsx"

export type ButtonCheckProps = ComponentProps<"input"> & {
   ref?: Ref<HTMLInputElement>
   value?: string | number
   fillContainer?: boolean
   onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export function ButtonCheck(props: ButtonCheckProps) {
   const {
      ref,
      fillContainer = false,
      checked = false,
      className,
      onChange,
      onDoubleClick,
      children,
      ...attributes
   } = props

   return (
      <div
         className={clsx(
            "ui-button-check-wrap",
            { "fill-container": fillContainer },
            className,
         )}
         onDoubleClick={onDoubleClick}
      >
         <input
            ref={ref}
            type="radio"
            checked={checked}
            onChange={onChange}
            {...attributes}
         />
         <label className="ui-button-check-label" htmlFor={attributes.id}>
            <Button variant="filled" type="button" className="ui-button-check">
               {children}
            </Button>
         </label>
      </div>
   )
}
