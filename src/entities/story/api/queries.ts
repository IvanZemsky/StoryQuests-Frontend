import { infiniteQueryOptions } from "@tanstack/react-query"
import { storyService } from "./service"
import { StoriesFilters } from "../model/types"

export const storyQueries = {
   baseKey: "stories",

   getStoriesInfiniteQueryOptions(params: StoriesFilters) {
      return infiniteQueryOptions({
         queryKey: [this.baseKey, "list", params],
         queryFn: (meta) => storyService.find({ ...params, page: meta.pageParam }),
         initialPageParam: 1,
         getNextPageParam: (result) => result.next,
         select: (result) => result.pages.flatMap((page) => page.data),
      })
   },
}
