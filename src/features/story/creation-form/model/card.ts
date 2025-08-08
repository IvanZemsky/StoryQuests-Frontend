import type { Story } from "@/src/entities/story"

export const getCardData = ({
   name,
   description,
   img,
   authorLogin,
}: Pick<Story, "name" | "description" | "img"> & {
   authorLogin: string
}): Story => ({
   id: "",
   name: name || "Name of the story",
   description: description || "Description",
   img,
   author: {
      id: "",
      login: authorLogin,
   },
   tags: [],
   sceneCount: 0,
   passes: 345,
   likes: 100,
   isLiked: false,
   date: "",
})
