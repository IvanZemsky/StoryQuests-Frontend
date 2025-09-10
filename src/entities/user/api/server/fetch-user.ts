"use server"

import { userService } from "../service"

export async function fetchUser(id: string) {
   try {
      return await userService.findByID(id)
   } catch (error) {
      return null
   }
}