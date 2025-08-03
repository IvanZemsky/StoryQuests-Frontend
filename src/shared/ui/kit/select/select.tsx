"use client"

import { ChangeEvent, ComponentProps, useState } from "react"
import { Button } from "../button/button"
import OpenArrowBottomIcon from "../../../assets/icons/arrow-bottom.svg"
import "./select.css"
import { SelectContext } from "./context"
import { SelectOption } from "./select-options"
import clsx from "clsx"
import { useOutsideClick } from "../../../lib/ui"

type Props = ComponentProps<"input"> & {
   title: string
}

export function Select(props: Props) {
   const { title, className, name, children, value, onChange } = props

   const [isOpen, setIsOpen] = useState(false)

   const selectRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false))

   const handleOpenClick = () => {
      setIsOpen(!isOpen)
   }

   const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      setIsOpen(false)
   }

   return (
      <div
         className={clsx("ui-select-wrap", className, { opened: isOpen })}
         ref={selectRef}
      >
         <Button
            onClick={handleOpenClick}
            defaultHover={false}
            variant="filled"
            rightIcon={<OpenArrowBottomIcon />}
            className="ui-select-button"
         >
            {value || title}
         </Button>

         {isOpen && (
            <SelectContext.Provider value={{ onChange: handleCheck, value, name }}>
               <div className="ui-select-options">{children}</div>
            </SelectContext.Provider>
         )}
      </div>
   )
}

Select.Option = SelectOption
