import { Test } from "@/src/app/test"
import { ApiSchemas, fetchClient } from "@/src/shared/api"
import { CONFIG } from "@/src/shared/model/config"

async function getStories() {
   const result = await fetchClient.GET("/stories")
   const { response } = result

   console.log(result.data)

   if (response.status !== 200 || !result.data) {
      // throw new Error("Error")
      console.log("Error ")
   }

   return result.data
}

export default async function Home() {
   const stories = await getStories()

   return (
      <div>
         Hello world! <Test />
      </div>
   )
}
