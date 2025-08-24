"use client"

import { ReactQueryClientProvider as ReactQueryClient } from "./react-query-client"

export function Providers({ children }: { children: React.ReactNode }) {
   return <ReactQueryClient>{children}</ReactQueryClient>
}
