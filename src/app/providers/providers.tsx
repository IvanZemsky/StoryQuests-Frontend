"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../../shared/api"
import { MocksProvider } from "./mocks"

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <MocksProvider>
         <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>
      </MocksProvider>
   )
}
