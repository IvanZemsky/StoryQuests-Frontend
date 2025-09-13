import { fetchUser } from "@/src/entities/user"
import { Metadata } from "next"
import { UserPageProps } from "./page"

export async function generateMetadata({ params }: UserPageProps): Promise<Metadata> {
   const { id } = await params
   const user = await fetchUser(id)

   const title = user?.login || "User Not Found"
   const description = user?.login ? `Profile of ${user.login}` : "User not found"
   
   return {
      title,
      description,
   }
}
