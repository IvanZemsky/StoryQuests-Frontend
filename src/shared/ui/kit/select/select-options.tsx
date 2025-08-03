import { ButtonCheck } from "../button-check/button-check"
import type { ButtonCheckProps } from "../button-check/button-check"
import { useSelectContext } from "./context"

export function SelectOption({ children, ...props }: Omit<ButtonCheckProps, "name">) {
   const { onChange, name, value } = useSelectContext()

   return (
      <ButtonCheck
         {...props}
         name={name}
         onChange={onChange}
         checked={value === props.value}
         value={props.value}
      >
         {children}
      </ButtonCheck>
   )
}
