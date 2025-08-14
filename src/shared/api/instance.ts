import createClient from "openapi-fetch"
import { CONFIG } from "../model/config"
import type { paths } from "./schema/generated"

export const fetchClient = createClient<paths>({
   baseUrl: CONFIG.API_URL,
})

