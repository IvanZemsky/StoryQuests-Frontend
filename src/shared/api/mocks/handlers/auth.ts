import { delay, HttpResponse } from "msw"
import { components } from "../../schema/generated"
import { http } from "../http"
import {
   createAccessTokenCookie,
   generateAccessToken,
   verifyTokenOrThrow,
} from "../session"

const mockUsers: components["schemas"]["User"][] = [
   {
      id: "1",
      login: "User1",
   },
]

const userPasswords = new Map<string, string>()
userPasswords.set("User1", "1234")

export const authHandlers = [
   http.post("/auth/login", async ({ request }) => {
      const body = await request.json()

      const user = mockUsers.find((user) => user.login === body.login)
      const storedPassword = userPasswords.get(body.login)

      await delay(1000)

      if (!user || !storedPassword || storedPassword !== body.password) {
         return HttpResponse.json(
            {
               message: "Invalid login or password",
               code: "INVALID_CREDENTIALS",
            },
            { status: 401 },
         )
      }

      const accessToken = await generateAccessToken({
         id: user.id,
         login: user.login,
      })

      return HttpResponse.json(
         {
            session: user,
         },
         {
            status: 200,
            headers: {
               "Set-Cookie": createAccessTokenCookie(accessToken),
            },
         },
      )
   }),

   http.get("/auth/session", async ({ request }) => {
      await delay(1000)

      const session = await verifyTokenOrThrow(request)

      return HttpResponse.json({
         session,
      })
   }),
]
