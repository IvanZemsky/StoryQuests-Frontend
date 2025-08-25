import { headers } from "next/headers"

export async function getTokenFromCookie() {
   const headersList = await headers()
   const cookieHeader = headersList.get("cookie")

   const token = cookieHeader?.split("token=")[1]

   return token
}
