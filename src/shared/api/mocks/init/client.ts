"use client"

import { useState, useLayoutEffect } from "react"

export function useInitClientSideMocks() {
   const [workerReady, setWorkerReady] = useState(false)

   useLayoutEffect(() => {
      const init = async () => {
         if (process.env.NEXT_PUBLIC_ENABLE_MOCKS === "true") {
            try {
               const { worker } = await import("@/src/shared/api/mocks/browser")
               await worker.start()
               setWorkerReady(true)
               console.log("MSW Worker started successfully.")
            } catch (error) {
               console.error("Failed to initialize MSW Worker:", error)
            }
         } else {
            setWorkerReady(true)
         }
      }

      init()
   }, [])

   return workerReady
}
