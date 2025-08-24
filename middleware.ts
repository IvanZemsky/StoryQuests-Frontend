import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { userService } from "./src/entities/user"

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
}

export async function middleware(req: NextRequest) {
   const url = req.nextUrl.clone()
   const pathname = req.nextUrl.pathname

   const token = req.cookies.get("token")?.value

   const session = await userService.getSession(token)

   return NextResponse.next()
}
