import { AuthContextProvider, fetchUser, getSession } from "@/src/entities/user"
import { ProfileCard, ProfileHeader, UserPagelayout } from "@/src/features/user/profile"
import { UserPageStoriesList } from "./list"

export type UserPageProps = {
   params: Promise<{
      id: string
   }>
}

export async function UserPage({ params }: UserPageProps) {
   const { id } = await params
   const user = await fetchUser(id)
   const session = await getSession()

   if (!user) {
      return <p>User not found</p>
   }

   return (
      <AuthContextProvider value={{ session }}>
         <UserPagelayout
            header={<ProfileHeader title={"User profile"} />}
            userCard={<ProfileCard data={user} />}
            storiesList={<UserPageStoriesList userId={user.id} />}
         />
      </AuthContextProvider>
   )
}
