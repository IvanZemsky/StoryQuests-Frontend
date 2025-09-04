import { userService } from "@/src/entities/user"
import { getTokenFromCookie } from "@/src/features/auth"

export async function fetchSession() {
   return await userService.getSession(await getTokenFromCookie())
}
