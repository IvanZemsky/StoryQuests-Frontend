import { userService } from "@/src/entities/user"
import {
   ProfileCard,
   ProfileHeader,
   SignOutBtn,
   UserPagelayout,
} from "@/src/features/user"
import { ProfilePageStoriesList } from "./ui/list"
import { getTokenFromCookie } from "@/src/features/auth"
import { redirect } from "next/navigation"
redirect

export async function ProfilePage() {
   const user = await getSession()

   if (!user) {
      return redirect("/sign-in")
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title={"User profile"} signOutBtn={<SignOutBtn />} />}
         userCard={<ProfileCard data={user} />}
         storiesList={<ProfilePageStoriesList userId={user.id} />}
      />
   )
}

async function getSession() {
   const token = await getTokenFromCookie()

   try {
      return await userService.getSession(token)
   } catch (error) {
      return null
   }
}
