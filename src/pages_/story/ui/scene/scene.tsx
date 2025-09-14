"use client"

import { type Scene as SceneType } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"
import { useIncrementStoryPasses } from "../../model/use-increment-story-passes"
import { useIncrementEndScenePasses } from "../../model/use-increment-end-scene-passes"
import { useSetStoryResult } from "../../model/use-set-story-result"
import { useSceneControls } from "@/src/features/scene"
import { useEffect } from "react"
import { createSceneVoiceoverText } from "../../model/create-voiceover-text"

type Props = {
   storyId: string
   isAuth: boolean
   data: SceneType[]
}

export function PageScene({ storyId, data, isAuth }: Props) {
   const { voiceover, options } = useSceneControls()

   const incrementStoryPassesMutation = useIncrementStoryPasses(storyId)
   const incrementEndScenePassesMutation = useIncrementEndScenePasses(storyId)
   const setStoryResultMutation = useSetStoryResult(storyId)

   const isDisabledEndLink =
      incrementStoryPassesMutation.isPending ||
      incrementEndScenePassesMutation.isPending ||
      setStoryResultMutation.isPending

   const onSceneChange = (scene: SceneType | null) => {
      if (!scene) return
      if (options.voiceover) {
         voiceover.speak(createSceneVoiceoverText(scene))
      }

      if (scene.type === "end") {
         incrementStoryPassesMutation.mutate()
         incrementEndScenePassesMutation.mutate(scene.id)

         if (isAuth) setStoryResultMutation.mutate(scene.id)
      }
   }

   useEffect(() => {
      return () => {
         voiceover.cancel()
      }
   }, [])

   return (
      <Scene
         data={data}
         firstSceneNumber={1}
         onSceneChange={onSceneChange}
         disableEndLink={isDisabledEndLink}
      />
   )
}
