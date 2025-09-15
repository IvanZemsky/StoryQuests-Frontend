import { NextResponse, type NextRequest } from "next/server"
import { authMiddleware } from "./src/features/auth"
import { getSession } from "./src/entities/user"
import { profileMiddleware } from "./src/features/user"

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
}

export async function middleware(req: NextRequest) {
   const requestHeaders = new Headers(req.headers)
   requestHeaders.set("x-next-pathname", req.nextUrl.pathname)
   
   const session = await getSession()

   const authResponse = await authMiddleware(req, session)
   if (authResponse.status !== 200) {
      return authResponse
   }

   const profileResponse = await profileMiddleware(req, session)
   if (profileResponse.status !== 200) {
      return profileResponse
   }

   return NextResponse.next()
}
