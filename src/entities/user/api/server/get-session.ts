"use server"

import { cookies } from "next/headers"
import { CONFIG } from "@/src/shared/model/config"
import { jwtVerify } from "jose"
import { Session } from "../../model/types"
import { cache } from "react"

export const getSession = cache(async function () {
   try {
      const cookieStore = await cookies()
      const token = cookieStore.get("token")?.value

      if (!token) {
         return null
      }

      const secret_encoded = new TextEncoder().encode(CONFIG.JWT_SECRET)

      const { payload } = await jwtVerify<Session>(token, secret_encoded)

      return {
         id: payload.id,
         login: payload.login,
      }
   } catch (error) {
      return null
   }
})
