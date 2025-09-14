"use client"

import { type Scene as SceneType } from "@/src/entities/scene"
import { Scene } from "@/src/widgets/scene"
import { useSceneControls } from "@/src/features/scene"
import { useEffect } from "react"
import { createSceneVoiceoverText } from "../../model/create-voiceover-text"
import { useEndScene } from "../../model/end-scene/use-end-scene"

type Props = {
   storyId: string
   isAuth: boolean
   data: SceneType[]
}

export function PageScene({ storyId, data, isAuth }: Props) {
   const { voiceover, options } = useSceneControls()
   const { isDisabledEndLink, handleEndScene } = useEndScene(storyId)

   const onSceneChange = (scene: SceneType | null) => {
      if (!scene) return
      if (options.voiceover) {
         voiceover.speak(createSceneVoiceoverText(scene))
      }

      if (scene.type === "end") {
         handleEndScene(scene.id, isAuth)
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
