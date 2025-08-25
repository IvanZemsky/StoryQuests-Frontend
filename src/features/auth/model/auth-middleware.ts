import { userService } from "@/src/entities/user"
import { PRIVATE_ROUTES, ONLY_PUBLIC_ROUTES } from "@/src/shared/model"
import { NextRequest, NextResponse } from "next/server"

export async function authMiddleware(req: NextRequest) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   console.log(pathname, "pathname")

   const token = req.cookies.get("token")?.value

   if (!token) {
      if (PRIVATE_ROUTES.includes(pathname)) {
         return NextResponse.redirect(new URL("/sign-in", url))
      }
      return NextResponse.next()
   }

   const session = await userService.getSession(token)

   if (session && ONLY_PUBLIC_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/", url))
   }

   if (!session && PRIVATE_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/sign-in", url))
   }

   return NextResponse.next()
}
