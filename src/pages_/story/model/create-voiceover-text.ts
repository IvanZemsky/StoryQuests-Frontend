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
   return title + `... ` + description + "..." + createSceneAnswersVoiceoverText(answers)
}

function createSceneAnswersVoiceoverText(answers: SceneAnswer[]): string {
   if (!answers.length) return "You reached the end of the story."
   return (
      " ... Possible actions..." +
      answers?.map((answer, i) => i + 1 + "." + answer.text + "...").join(", ")
   )
}
