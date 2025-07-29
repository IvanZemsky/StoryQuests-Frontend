"use client"

import { useInitClientSideMocks } from "@/src/shared/api"

export function MocksProvider({ children }: { children: React.ReactNode }) {
   const isWorkerReady = useInitClientSideMocks()

   if (!isWorkerReady) {
      return null
   }

   return children
}
