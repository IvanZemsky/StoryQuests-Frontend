import { cookies } from "next/headers"

export async function getTokenFromCookie() {
   const cookieStore = await cookies()
   const token = cookieStore.get("token")?.value

   return token
}
