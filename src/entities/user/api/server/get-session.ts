"use server"

import { headers } from "next/headers"
import { userService } from "../service"

export async function getSession() {
   try {
      const headersList = await headers()
      const cookieHeader = headersList.get("cookie") ?? ""

      if (!cookieHeader) {
         return null
      }

      const story = await userService.getSession({ Cookie: cookieHeader })

      return story
   } catch (error) {
      return null
   }
}
