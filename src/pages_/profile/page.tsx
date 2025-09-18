import { AuthContextProvider, getSession } from "@/src/entities/user"
import { ProfileCard, ProfileHeader, UserPagelayout } from "@/src/features/user/profile"
import { ProfilePageStoriesList } from "./ui/list"
import { redirect } from "next/navigation"
import { SignOutBtn } from "@/src/features/auth"
redirect

export async function ProfilePage() {
   const session = await getSession()

   if (!session) {
      return redirect("/sign-in")
   }

   return (
      <AuthContextProvider value={{ session }}>
         <UserPagelayout
            header={<ProfileHeader title={"User profile"} signOutBtn={<SignOutBtn />} />}
            userCard={<ProfileCard data={session} />}
            storiesList={<ProfilePageStoriesList userId={session.id} />}
         />
      </AuthContextProvider>
   )
}
