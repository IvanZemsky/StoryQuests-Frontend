import { AxiosError } from "axios"
import { ApiError } from "next/dist/server/api-utils"

export type APIError = {
   message: string
   code: string
}

export type APIAxiosError = AxiosError<ApiError>
