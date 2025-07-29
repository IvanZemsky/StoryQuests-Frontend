import { HttpResponse } from "msw"
import { ApiSchemas } from "../.."
import { http } from "../http"
const storiesMocks: ApiSchemas["Story"][] = [
   {
      id: "story-1",
      name: "The Adventure of Story 1",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 1.",
      img: "https://example.com/story1.jpg",
      author: {
         id: "author-1",
         login: "Author1",
      },
      tags: ["adventure", "fantasy", "story-1"],
      sceneCount: 20,
      passes: 100,
      likes: 50,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
   },
   {
      id: "story-2",
      name: "The Adventure of Story 2",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 2.",
      img: "https://example.com/story2.jpg",
      author: {
         id: "author-2",
         login: "Author2",
      },
      tags: ["adventure", "fantasy", "story-2"],
      sceneCount: 22,
      passes: 105,
      likes: 52,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
   },
   {
      id: "story-3",
      name: "The Adventure of Story 3",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 3.",
      img: "https://example.com/story3.jpg",
      author: {
         id: "author-3",
         login: "Author3",
      },
      tags: ["adventure", "fantasy", "story-3"],
      sceneCount: 24,
      passes: 110,
      likes: 54,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(),
   },
   {
      id: "story-4",
      name: "The Adventure of Story 4",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 4.",
      img: "https://example.com/story4.jpg",
      author: {
         id: "author-4",
         login: "Author4",
      },
      tags: ["adventure", "fantasy", "story-4"],
      sceneCount: 26,
      passes: 115,
      likes: 56,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(),
   },
   {
      id: "story-5",
      name: "The Adventure of Story 5",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 5.",
      img: "https://example.com/story5.jpg",
      author: {
         id: "author-5",
         login: "Author5",
      },
      tags: ["adventure", "fantasy", "story-5"],
      sceneCount: 28,
      passes: 120,
      likes: 58,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
   },
   {
      id: "story-6",
      name: "The Adventure of Story 6",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 6.",
      img: "https://example.com/story6.jpg",
      author: {
         id: "author-1",
         login: "Author1",
      },
      tags: ["adventure", "fantasy", "story-6"],
      sceneCount: 30,
      passes: 125,
      likes: 60,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
   },
   {
      id: "story-7",
      name: "The Adventure of Story 7",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 7.",
      img: "https://example.com/story7.jpg",
      author: {
         id: "author-2",
         login: "Author2",
      },
      tags: ["adventure", "fantasy", "story-7"],
      sceneCount: 32,
      passes: 130,
      likes: 62,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
   },
   {
      id: "story-8",
      name: "The Adventure of Story 8",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 8.",
      img: "https://example.com/story8.jpg",
      author: {
         id: "author-3",
         login: "Author3",
      },
      tags: ["adventure", "fantasy", "story-8"],
      sceneCount: 34,
      passes: 135,
      likes: 64,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString(),
   },
   {
      id: "story-9",
      name: "The Adventure of Story 9",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 9.",
      img: "https://example.com/story9.jpg",
      author: {
         id: "author-4",
         login: "Author4",
      },
      tags: ["adventure", "fantasy", "story-9"],
      sceneCount: 36,
      passes: 140,
      likes: 66,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 9)).toISOString(),
   },
   {
      id: "story-10",
      name: "The Adventure of Story 10",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 10.",
      img: "https://example.com/story10.jpg",
      author: {
         id: "author-5",
         login: "Author5",
      },
      tags: ["adventure", "fantasy", "story-10"],
      sceneCount: 38,
      passes: 145,
      likes: 68,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(),
   },
   {
      id: "story-11",
      name: "The Adventure of Story 11",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 11.",
      img: "https://example.com/story11.jpg",
      author: {
         id: "author-1",
         login: "Author1",
      },
      tags: ["adventure", "fantasy", "story-11"],
      sceneCount: 40,
      passes: 150,
      likes: 70,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 11)).toISOString(),
   },
   {
      id: "story-12",
      name: "The Adventure of Story 12",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 12.",
      img: "https://example.com/story12.jpg",
      author: {
         id: "author-2",
         login: "Author2",
      },
      tags: ["adventure", "fantasy", "story-12"],
      sceneCount: 42,
      passes: 155,
      likes: 72,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(),
   },
   {
      id: "story-13",
      name: "The Adventure of Story 13",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 13.",
      img: "https://example.com/story13.jpg",
      author: {
         id: "author-3",
         login: "Author3",
      },
      tags: ["adventure", "fantasy", "story-13"],
      sceneCount: 44,
      passes: 160,
      likes: 74,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 13)).toISOString(),
   },
   {
      id: "story-14",
      name: "The Adventure of Story 14",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 14.",
      img: "https://example.com/story14.jpg",
      author: {
         id: "author-4",
         login: "Author4",
      },
      tags: ["adventure", "fantasy", "story-14"],
      sceneCount: 46,
      passes: 165,
      likes: 76,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString(),
   },
   {
      id: "story-15",
      name: "The Adventure of Story 15",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 15.",
      img: "https://example.com/story15.jpg",
      author: {
         id: "author-5",
         login: "Author5",
      },
      tags: ["adventure", "fantasy", "story-15"],
      sceneCount: 48,
      passes: 170,
      likes: 78,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(),
   },
   {
      id: "story-16",
      name: "The Adventure of Story 16",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 16.",
      img: "https://example.com/story16.jpg",
      author: {
         id: "author-1",
         login: "Author1",
      },
      tags: ["adventure", "fantasy", "story-16"],
      sceneCount: 50,
      passes: 175,
      likes: 80,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 16)).toISOString(),
   },
   {
      id: "story-17",
      name: "The Adventure of Story 17",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 17.",
      img: "https://example.com/story17.jpg",
      author: {
         id: "author-2",
         login: "Author2",
      },
      tags: ["adventure", "fantasy", "story-17"],
      sceneCount: 52,
      passes: 180,
      likes: 82,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 17)).toISOString(),
   },
   {
      id: "story-18",
      name: "The Adventure of Story 18",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 18.",
      img: "https://example.com/story18.jpg",
      author: {
         id: "author-3",
         login: "Author3",
      },
      tags: ["adventure", "fantasy", "story-18"],
      sceneCount: 54,
      passes: 185,
      likes: 84,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 18)).toISOString(),
   },
   {
      id: "story-19",
      name: "The Adventure of Story 19",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 19.",
      img: "https://example.com/story19.jpg",
      author: {
         id: "author-4",
         login: "Author4",
      },
      tags: ["adventure", "fantasy", "story-19"],
      sceneCount: 56,
      passes: 190,
      likes: 86,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 19)).toISOString(),
   },
   {
      id: "story-20",
      name: "The Adventure of Story 20",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 20.",
      img: "https://example.com/story20.jpg",
      author: {
         id: "author-5",
         login: "Author5",
      },
      tags: ["adventure", "fantasy", "story-20"],
      sceneCount: 58,
      passes: 195,
      likes: 88,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(),
   },
   {
      id: "story-21",
      name: "The Adventure of Story 21",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 21.",
      img: "https://example.com/story21.jpg",
      author: {
         id: "author-1",
         login: "Author1",
      },
      tags: ["adventure", "fantasy", "story-21"],
      sceneCount: 60,
      passes: 200,
      likes: 90,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 21)).toISOString(),
   },
   {
      id: "story-22",
      name: "The Adventure of Story 22",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 22.",
      img: "https://example.com/story22.jpg",
      author: {
         id: "author-2",
         login: "Author2",
      },
      tags: ["adventure", "fantasy", "story-22"],
      sceneCount: 62,
      passes: 205,
      likes: 92,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 22)).toISOString(),
   },
   {
      id: "story-23",
      name: "The Adventure of Story 23",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 23.",
      img: "https://example.com/story23.jpg",
      author: {
         id: "author-3",
         login: "Author3",
      },
      tags: ["adventure", "fantasy", "story-23"],
      sceneCount: 64,
      passes: 210,
      likes: 94,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 23)).toISOString(),
   },
   {
      id: "story-24",
      name: "The Adventure of Story 24",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 24.",
      img: "https://example.com/story24.jpg",
      author: {
         id: "author-4",
         login: "Author4",
      },
      tags: ["adventure", "fantasy", "story-24"],
      sceneCount: 66,
      passes: 215,
      likes: 96,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 24)).toISOString(),
   },
   {
      id: "story-25",
      name: "The Adventure of Story 25",
      description:
         "A thrilling tale of adventure and intrigue, where you, the reader, decide the fate of Story 25.",
      img: "https://example.com/story25.jpg",
      author: {
         id: "author-5",
         login: "Author5",
      },
      tags: ["adventure", "fantasy", "story-25"],
      sceneCount: 68,
      passes: 220,
      likes: 98,
      isLiked: false,
      date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(),
   },
]

export const storiesHandlers = [
   http.get("/stories", ({ request }) => {
      return HttpResponse.json(storiesMocks)
   }),

   http.get("/stories/{storyId}", ({ params, request }) => {
      const storyId = params.storyId

      if (!storyId) {
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

      return HttpResponse.json(story)
   }),
]
