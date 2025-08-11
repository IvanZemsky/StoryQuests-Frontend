import type { components, paths } from "./schema/generated"

export type ApiPaths = paths
export type ApiSchemas = components["schemas"]

export { fetchClient, rqClient } from "./instance"
export { initQueryClient } from "./query-client"

export { useInitClientSideMocks } from "./mocks/init/client"
