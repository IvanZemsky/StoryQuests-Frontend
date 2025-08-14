import { HttpResponse } from "msw"
import { jwtVerify, SignJWT } from "jose"

type Session = {
   id: string
   login: string
}

const JWT_ACCESS_TOKEN_EXPIRY = "1h"
const JWT_SECRET = new TextEncoder().encode("secret")

export async function generateAccessToken(dto: Session) {
   const token = await new SignJWT(dto)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(JWT_ACCESS_TOKEN_EXPIRY)
      .sign(JWT_SECRET)

   return token
}

export async function verifyTokenOrThrow(request: Request): Promise<Session> {
   const token = getToken(request)
   console.log(token)
   const session = token ? await verifyToken(token).catch(() => null) : null
   if (!session) {
      throw HttpResponse.json(
         {
            message: "Invalid token",
            code: "INVALID_TOKEN",
         },
         { status: 401 },
      )
   }
   return session
}

export function getToken(request: Request) {
   const cookieHeader = request.headers.get("Cookie")
   console.log("COOKIE", cookieHeader)
   let token: string | undefined

   if (cookieHeader) {
      const cookies = cookieHeader.split(";")
      for (const cookie of cookies) {
         const [name, value] = cookie.trim().split("=")
         if (name === "token") {
            token = value
            break
         }
      }
   }

   return token
}

export async function verifyToken(token: string): Promise<Session> {
   const { payload } = await jwtVerify<Session>(token, JWT_SECRET)
   return {
      id: payload.id,
      login: payload.login,
   }
}

export async function verifyTokenWithoutThrow(request: Request): Promise<Session | null> {
   const token = getToken(request)
   const session = token ? await verifyToken(token).catch(() => null) : null
   return session
}

export function createAccessTokenCookie(token: string) {
   return `token=${token}; Max-Age=604800`
}
