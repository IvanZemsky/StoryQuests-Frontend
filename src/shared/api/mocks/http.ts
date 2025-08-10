import { createOpenApiHttp } from "openapi-msw"
import { CONFIG } from "../../model/config"
import { paths } from "../schema/generated"

export const http = createOpenApiHttp<paths>({
   baseUrl: CONFIG.API_URL,
})
