import { fetchClient, mockMiddleware } from "@/src/shared/api"
import { CreateStoryPageClient } from "./page.client"

export async function CreateStoryPage() {
   await mockMiddleware(fetchClient)

   return <CreateStoryPageClient />
}
