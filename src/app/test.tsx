"use client"

import { ApiSchemas, fetchClient } from "@/src/shared/api"
import { useEffect, useState } from "react"

export function Test() {
   const [data, setData] = useState<ApiSchemas["Story"][] | undefined>(undefined)

   useEffect(() => {
      fetchClient.GET("/stories").then((result) => {
         console.log("CLIENT", result)
         setData(result.data)
      })
   }, [])

   return <div>{JSON.stringify(data)}</div>
}
