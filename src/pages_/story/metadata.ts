import { storyService } from "@/src/entities/story"
import { StoryPageProps } from "./page"
import { Metadata } from "next"

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
   const { id } = await params
   const story = await storyService.findByID(id)

   // add try/catch and loading state?
   const title = story?.name || "Story Not Found"
   const description = story?.description || "Description not found"

   return {
      title,
      description,
   }
}
