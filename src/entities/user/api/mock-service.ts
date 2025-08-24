import { fetchClient } from "@/src/shared/api"
import { LoginDTO } from "../model/types"

export const userService = {
   async login(dto: LoginDTO) {
      await fetchClient.POST("/auth/login", {
         body: dto,
      })
   },
}
