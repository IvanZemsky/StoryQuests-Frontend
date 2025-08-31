import { StoriesFilters } from "@/src/entities/story"
import { storyQueries } from "@/src/entities/story/api/queries"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useInfiniteStories = (filters: StoriesFilters) => {
   return useInfiniteQuery(storyQueries.getStoriesInfiniteQueryOptions(filters))
}
