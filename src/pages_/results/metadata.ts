import { Metadata } from "next"
import { ResultsPageProps } from "./page"
import { fetchStory, Story } from "@/src/entities/story"

export async function generateMetadata({ params }: ResultsPageProps): Promise<Metadata> {
   const { id } = await params
   const story = await fetchStory(id)

   const description = story?.description

   return {
      title: generateTitle(story?.name),
      description,
      openGraph: generateOpenGraphTag(story),
   }
}

function generateOpenGraphTag(story: Story | null) {
   return {
      title: generateTitle(story?.name),
      description: story?.description,
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

function generateTitle(name: string | undefined) {
   return !!name ? `Statistics for ${name}` : "Statistics for story not found"
}
