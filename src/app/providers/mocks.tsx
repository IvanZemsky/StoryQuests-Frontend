"use client"

import { useInitClientSideMocks } from "@/src/shared/api"

export function MocksProvider({ children }: { children: React.ReactNode }) {
   const isWorkerReady = useInitClientSideMocks()

   if (isWorkerReady || process.env.NEXT_PUBLIC_ENABLE_MOCKS === "false") {
      return children
   }

   return <div>Initializing mocks...</div>
}
