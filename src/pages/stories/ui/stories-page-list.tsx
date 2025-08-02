import { StoriesList, storyService } from "@/src/entities/story"

export async function StoriesPageList() {
   const data = await storyService.find()

   return (
      <StoriesList
         data={data}
         renderItem={(data) => <div key={data.id}>{data.name}</div>}
      />
   )
}
