import { Dispatch, SetStateAction } from "react"
import { FieldValues, RegisterOptions } from "react-hook-form"

export type SetStateFn<T> = Dispatch<SetStateAction<T>>

export type NarrowedRegisterOptions<TFieldName extends string> = RegisterOptions<
   FieldValues,
   TFieldName
> & { maxLength: number }

export type CheckData = {
   text: string
   name: string
   value: string
   id: string
}

export type PageSearchParams = {
   [key: string]: string | null
}
