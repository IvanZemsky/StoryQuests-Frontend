import { userService } from "@/src/entities/user"
import { ResultsAuthor } from "./author/author"
import { ResultsHeader } from "./header/results-header"
import { ResultsLayout } from "./layout/layout"
import { fetchResults } from "./model/fetch-results"
import { fetchStory } from "./model/fetch-story"
import { getTokenFromCookie } from "@/src/features/auth"
import { fetchUserResult } from "./model/fetch-user-result"
import { ResultCard } from "./result-card/result-card"

export type ResultsPageProps = {
   params: Promise<{
      id: string
   }>
}

export async function ResultsPage({ params }: ResultsPageProps) {
   const { id } = await params
   const story = await fetchStory(id)

   const userResult = await fetchUserResult(id)
   if (!story) {
      return <div>Story not found</div>
   }

   const results = await fetchResults(id)
   if (!results) {
      return <div>Results not found</div>
   }

   const result = results.find((result) => result.id === userResult?.sceneId)

   return (
      <ResultsLayout
         header={<ResultsHeader storyName={story.name} />}
         author={<ResultsAuthor author={story.author} />}
         resultCard={result && <ResultCard data={result} />}
      />
   )
}
