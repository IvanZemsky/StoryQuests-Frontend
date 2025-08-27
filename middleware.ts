import type { NextRequest } from "next/server"
import { authMiddleware } from "./src/features/auth"

export const config = {
   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
}

export async function middleware(req: NextRequest) {
   // await authMiddleware(req)
}
