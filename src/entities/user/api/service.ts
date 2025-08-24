import { API } from "@/src/shared/api"
import { LoginDTO } from "../model/types"
import { Session } from "inspector/promises"

export const userService = {
   async login(dto: LoginDTO) {
      await API.post("auth/login", {
         login: dto.login,
         password: dto.password,
      })
   },

   async logout() {
      await API.post("auth/logout")
   },

   async register(dto: LoginDTO) {
      await API.post("auth/register", {
         login: dto.login,
         password: dto.password,
      })
   },

   async getSession(token?: string): Promise<Session | null> {
      try {
         const { data } = await API.get<Session>("auth/session", {
            headers: {
               Cookie: `token=${token}`,
            },
         })
         return data
      } catch (error) {
         return null
      }
   },
}
