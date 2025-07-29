import { createOpenApiHttp } from "openapi-msw"
import { ApiPaths } from ".."
import { CONFIG } from "../../model/config"

export const http = createOpenApiHttp<ApiPaths>({
   baseUrl: CONFIG.API_URL,
})
