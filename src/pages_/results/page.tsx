import { ResultsAuthor } from "./ui/author/author"
import { ResultsHeader } from "./ui/header/results-header"
import { ResultsLayout } from "./ui/layout/layout"
import { fetchResults } from "./model/fetch-results"
import { ResultCard } from "./ui/result-card/result-card"
import { Statistics } from "./ui/statistics/statistics"
import { fetchMyResult, fetchStory } from "@/src/entities/story"

export type ResultsPageProps = {
   params: Promise<{
      id: string
   }>
}

export async function ResultsPage({ params }: ResultsPageProps) {
   const { id } = await params

   const story = await fetchStory(id)
   if (!story) {
      return <div>Story not found</div>
   }

   const userResult = await fetchMyResult(id)

   const results = await fetchResults(id)
   if (!results) {
      return <div>Results not found</div>
   }

   const resultsSortedByPasses = results.sort((a, b) => b.passes - a.passes)

   const result = results.find((result) => result.id === userResult?.sceneId)

   return (
      <ResultsLayout
         header={<ResultsHeader storyName={story.name} />}
         author={<ResultsAuthor author={story.author} />}
         resultCard={result && <ResultCard data={result} />}
         results={<Statistics data={resultsSortedByPasses} total={story.passes} />}
      />
   )
}
