import { ChangeEventHandler, createContext, useContext } from "react"

export const ToggleButtonGroupContext = createContext<{
   value?: string | number | readonly string[]
   name?: string
   onChange?: ChangeEventHandler<HTMLInputElement>
}>({})

export function useToggleButtonGroupContext() {
   const context = useContext(ToggleButtonGroupContext)

   if (!context) {
      throw new Error(
         "All sub components of ToggleButtonGroup must be wrapped in ToggleButtonGroup",
      )
   }

   return context
}
