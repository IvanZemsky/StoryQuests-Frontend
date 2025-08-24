import { delay, HttpResponse } from "msw"
import { http } from "../http"
import { storiesMocks } from "../data/stories"
import { components } from "../schema/generated"
import { scenesMocks } from "../data/scenes"
import { verifyTokenOrThrow, verifyTokenWithoutThrow } from "../session"
import { mockStoriesLikes } from "../data/stories-likes"

export const storiesHandlers = [
   http.get("/stories", async ({ request }) => {
      const url = new URL(request.url)
      const page = Number(url.searchParams.get("page")) || 1
      const limit = Number(url.searchParams.get("limit")) || 10
      const sort = url.searchParams.get("sort") || ""
      const length = url.searchParams.get("length") || ""
      const search = url.searchParams.get("search") || ""

      let userId = ""

      const session = await verifyTokenWithoutThrow(request)

      userId = session?.id ?? url.searchParams.get("userId") ?? ""

      console.log(userId)

      const scenesAmountByLength: Record<"short" | "medium" | "long", number> = {
         short: 10,
         medium: 20,
         long: 30,
      }

      let stories: components["schemas"]["Story"][] = storiesMocks

      if (length) {
         stories = stories.filter(
            (story) =>
               story.sceneCount <=
               scenesAmountByLength[length as keyof typeof scenesAmountByLength],
         )
      }

      if (search) {
         stories = stories.filter(
            (story) =>
               story.name.toLowerCase().includes(search.toLowerCase()) ||
               story.description.toLowerCase().includes(search.toLowerCase()),
         )
      }

      if (sort) {
         stories.sort((a, b) => {
            switch (sort) {
               case "best":
                  return a.likes - b.likes
               case "popular":
                  return b.passes - a.passes
               case "new":
                  return new Date(a.date).getTime() - new Date(b.date).getTime()
               default:
                  return 0
            }
         })
      }

      if (userId) {
         stories = stories.map((story) => {
            return {
               ...story,
               isLiked: mockStoriesLikes.some(
                  (like) => like.userId === userId && like.storyId === story.id,
               ),
            }
         })
      }

      const result = stories.slice((page - 1) * limit, page * limit)

      await delay(1000)

      return HttpResponse.json(result, {
         headers: {
            "Content-Type": "application/json",
            "X-Total-Count": String(stories.length),
         },
      })
   }),

   http.get("/stories/{storyId}", async ({ params, request }) => {
      const storyId = params.storyId

      if (!storyId) {
         return HttpResponse.json(
            { message: "Id of the story is required", code: "BAD_REQUEST" },
            { status: 400 },
         )
      }

      await delay(1000)

      const session = await verifyTokenWithoutThrow(request)

      const story = storiesMocks.find((story) => story.id === params.storyId)

      if (!story) {
         return HttpResponse.json(
            { message: "Story not found", code: "NOT_FOUND" },
            { status: 404 },
         )
      }

      story.isLiked = mockStoriesLikes.some(
         (like) => like.userId === session?.id && like.storyId === story.id,
      )

      return HttpResponse.json(story)
   }),

   http.get("/stories/{storyId}/scenes", async ({ params, request }) => {
      const storyId = params.storyId

      if (!storyId) {
         return HttpResponse.json(
            { message: "Id of the story is required", code: "BAD_REQUEST" },
            { status: 400 },
         )
      }

      await delay(1000)

      const scenes = scenesMocks.filter((scene) => scene.storyId === params.storyId)

      if (!scenes.length) {
         return HttpResponse.json([])
      }

      return HttpResponse.json(scenes)
   }),

   http.patch("/stories/{storyId}/like", async ({ params, request }) => {
      // verifyTokenOrThrow(request)
      const storyId = params.storyId
      const { isLiked } = await request.json()

      await delay(1000)

      if (isLiked === undefined) {
         return HttpResponse.json(
            { message: "isLiked is required", code: "BAD_REQUEST" },
            { status: 400 },
         )
      }

      if (storyId === undefined) {
         return HttpResponse.json(
            { message: "Id of the story is required", code: "BAD_REQUEST" },
            { status: 400 },
         )
      }

      const story = storiesMocks.find((story) => story.id === params.storyId)

      if (!story) {
         return HttpResponse.json(
            { message: "Story not found", code: "NOT_FOUND" },
            { status: 404 },
         )
      }

      story.likes += 1

      return HttpResponse.json(story)
   }),
]
