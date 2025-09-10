import { StoryPageProps } from "./page"
import { Metadata } from "next"
import { fetchStory, Story } from "@/src/entities/story"

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
   const { id } = await params
   const story = await fetchStory(id)

   const title = story?.name || "Story Not Found"
   const description = story?.description || "Description not found"

   return {
      title,
      description,
      openGraph: generateOpenGraphTag(story),
   }
}

function generateOpenGraphTag(story: Story | null) {
   return {
      title: story?.name || "Story Not Found",
      description: story?.description || "Description not found",
      authors: story?.author.login,
      images: [
         {
            url: story?.img || "",
            width: 800,
            height: 600,
         },
      ],
      tags: story?.tags,
   }
}
