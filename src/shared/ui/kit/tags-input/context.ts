import { ChangeEventHandler, createContext, useContext } from "react"

export const TagsInputContext = createContext<{
   value: string[]
   name?: string
   onChange?: ChangeEventHandler<HTMLInputElement>
}>({ value: [] })

export function useTagsInputContext() {
   const context = useContext(TagsInputContext)

   if (!context) {
      throw new Error(
         "All sub components of TagsInputContext must be wrapped in TagsInputContext",
      )
   }

   return context
}
