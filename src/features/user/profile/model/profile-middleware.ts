import { Session } from "@/src/entities/user"
import { NextRequest, NextResponse } from "next/server"

export async function profileMiddleware(req: NextRequest, session: Session | null) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   if (pathname.startsWith("/users/")) {
      console.log("USERS")
      const pathSegments = pathname.split("/").filter(Boolean)

      if (pathSegments[0] === "users" && pathSegments[1]) {
         const userId = pathSegments[1]

         console.log(session?.id === userId)

         if (session && session.id === userId) {
            return NextResponse.redirect(new URL("/profile", url))
         }
      }
   }

   return NextResponse.next()
}
