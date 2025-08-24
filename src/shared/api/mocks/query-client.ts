import { QueryClient } from "@tanstack/react-query";

export function initQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            },
        },
    })
}