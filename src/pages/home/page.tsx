import { fetchClient } from "@/src/shared/api"
import { Hero } from "./ui/hero/hero"
import { HomePageLayout } from "./ui/layout/home-page-layout"
import { HomePageStoriesList } from "./ui/list/home-page-stories-list"
import { headers } from "next/headers"

export async function HomePage() {
   const headersList = await headers()
   const cookie = headersList.get("Cookie")
   const {data} = await fetchClient.GET("/auth/session", {
      headers: {
         Cookie: cookie,
      },
   })
   console.log(data)

   return (
      <HomePageLayout
         hero={<Hero />}
         storiesSections={
            <>
               <HomePageStoriesList filters={{ sort: "popular", limit: 4 }} title="Popular" />
            </>
         }
         storyCreationExample={undefined}
      />
   )
}
