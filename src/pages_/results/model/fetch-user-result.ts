import { storyService } from "@/src/entities/story"
import { userService } from "@/src/entities/user"
import { getTokenFromCookie } from "@/src/features/auth"

export async function fetchUserResult(storyId: string) {
   try {
      const session = await userService.getSession(await getTokenFromCookie())
      if (!session) return null

      return await storyService.findResultByUserID(storyId, session.id)
   } catch (error) {
      return null
   }
}
