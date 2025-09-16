import { fetchUser } from "@/src/entities/user"
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

   if (!user) {
      return <p>User not found</p>
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title={"User profile"} />}
         userCard={<ProfileCard data={user} />}
         storiesList={<UserPageStoriesList userId={user.id} />}
      />
   )
}
