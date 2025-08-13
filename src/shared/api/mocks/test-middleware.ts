"use server"

// Since MSW cannot be initialized in middleware.ts of Next,
// when working with mocks, you need to connect this file to the page.

// MSW doesn't work here if fechClient is imported

import { headers } from "next/headers"
import { Client } from "openapi-fetch"
import { paths } from "../schema/generated"
import { redirect } from "next/navigation"

export async function mockMiddleware(fetchClient: Client<paths, `${string}/${string}`>) {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie")

   const { data } = await fetchClient.GET("/auth/session", {
      headers: {
         Cookie: cookieHeader,
      },
   })
   if (!data) {
      return redirect("sign-in")
   }
}
