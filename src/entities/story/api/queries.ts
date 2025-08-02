import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query"
import { StoryFilters } from "../model/types"
import { storyService } from "./service"

// export const storyQueries = {
//    baseKey: "stories",

//    getStoriesQueryOptions(params: StoryFilters) {
//       return queryOptions({
//          queryKey: [this.baseKey, "list", params],
//          queryFn: () => storyService.find(params),
//       })
//    },

//    getStoriesInfiniteQueryOptions(params: StoryFilters) {
//       return infiniteQueryOptions({
//          queryKey: [this.baseKey, "list", params],
//          queryFn: (meta) =>
//             storyService.find({ ...params, page: meta.pageParam }),
//          initialPageParam: 1,
//          getNextPageParam: (result) => result.next,
//          select: (result) => result.pages.flatMap((page) => page.stories),
//       })
//    },
// }
