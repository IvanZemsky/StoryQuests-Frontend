import { getSession } from "@/src/entities/user"
import {
   ProfileCard,
   ProfileHeader,
   UserPagelayout,
} from "@/src/features/user/profile"
import { ProfilePageStoriesList } from "./ui/list"
import { redirect } from "next/navigation"
import { SignOutBtn } from "@/src/features/auth"
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
