import { API } from "@/src/shared/api"
import { LoginDTO, RegisterDTO, Session, User } from "../model/types"

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

   async register(dto: RegisterDTO) {
      await API.post("auth/register", {
         login: dto.login,
         password: dto.password,
      })
   },

   async findByID(id: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
         method: "GET",
         next: { tags: [`user-${id}`] },
      })

      if (!response.ok) {
         throw new Error(`Failed to fetch user ${id}: ${response.statusText}`)
      }

      return response.json() as Promise<User>
   },

   async getSession(headers: Record<string, string> = {}): Promise<Session | null> {
      try {
         const { data } = await API.get<Session>("auth/session", {
            headers,
         })
         return data
      } catch (error) {
         return null
      }
   },
}
