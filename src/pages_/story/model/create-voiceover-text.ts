import { SceneAnswer } from "@/src/entities/scene"

export function createSceneVoiceoverText({
   title,
   description,
   answers,
}: {
   title: string
   description: string
   answers: SceneAnswer[]
}): string {
   return (
      title +
      `... ` +
      description +
      " ... Possible actions..." +
      answers?.map((answer, i) => i + 1 + "." + answer.text + "...").join(", ")
   )
}
