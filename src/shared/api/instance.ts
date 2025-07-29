import createClient from "openapi-fetch"
import { default as rqCreateClient } from "openapi-react-query"
import { CONFIG } from "../model/config"
import type { paths } from "./schema/generated"

export const fetchClient = createClient<paths>({
   baseUrl: CONFIG.API_URL,
})

export const rqClient = rqCreateClient(fetchClient)
