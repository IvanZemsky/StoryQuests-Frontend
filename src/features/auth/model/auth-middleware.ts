import { Session } from "@/src/entities/user"
import { PRIVATE_ROUTES, ONLY_PUBLIC_ROUTES } from "@/src/shared/model"
import { NextRequest, NextResponse } from "next/server"

export async function authMiddleware(req: NextRequest, session: Session | null) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   if (session && ONLY_PUBLIC_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/", url))
   }

   if (!session && PRIVATE_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/sign-in", url))
   }

   return NextResponse.next()
}
