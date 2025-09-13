import { AuthContextProvider, getSession } from "@/src/entities/user"
import { Hero } from "./ui/hero/hero"
import { HomePageLayout } from "./ui/layout/home-page-layout"
import { HomePageStoriesList } from "./ui/list/home-page-stories-list"

export async function HomePage() {
   const session = await getSession()

   return (
      <AuthContextProvider value={{ session }}>
         <HomePageLayout
            hero={<Hero />}
            storiesSections={
               <>
                  <HomePageStoriesList
                     filters={{ sort: "popular", limit: 4, page: 1 }}
                     title="Popular"
                  />
               </>
            }
            storyCreationExample={undefined}
         />
      </AuthContextProvider>
   )
}
