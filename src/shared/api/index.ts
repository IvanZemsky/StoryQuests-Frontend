import type { components, paths } from "./mocks/schema/generated"

export type ApiPaths = paths
export type ApiSchemas = components["schemas"]

export { API } from "./client/axios-client"

export { fetchClient } from "./mocks/instance"
export { initQueryClient } from "./mocks/query-client"

export { useInitClientSideMocks } from "./mocks/init/client"
export { mockMiddleware } from "./mocks/test-middleware"
export type { APIError, APIAxiosError } from "./errors"
export { getBaseUrl } from "./client/axios-client"
