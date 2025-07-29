"use client"

import { useState, useLayoutEffect } from "react"

export function useInitClientSideMocks() {
   const [workerReady, setWorkerReady] = useState(false)

   useLayoutEffect(() => {
      const init = async () => {
         if (process.env.NEXT_PUBLIC_ENABLE_MOCKS) {
            const { worker } = await import("@/src/shared/api/mocks/browser")
            await worker.start()
            setWorkerReady(true)
         }
      }

      init()
   }, [])

   return workerReady
}
