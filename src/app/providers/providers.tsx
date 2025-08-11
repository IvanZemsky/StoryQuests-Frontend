"use client"

import { MocksProvider as Mocks } from "./mocks"
import { ReactQueryClientProvider as ReactQueryClient } from "./react-query-client"

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <Mocks>
         <ReactQueryClient>{children}</ReactQueryClient>
      </Mocks>
   )
}
