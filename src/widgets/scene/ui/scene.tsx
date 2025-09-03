"use client"

import type { Scene } from "@/src/entities/scene"
import { EndSceneLink, SceneLayout, SelectAnswer } from "@/src/features/scene"
import { SwitchFade } from "@/src/shared/ui"
import { useScene } from "../model/use-scene"

type Props = {
   data: Scene[]
   firstSceneNumber: number
   onSceneChange?: (scene: Scene | null) => void
   disableEndLink?: boolean
}

export function Scene({
   data,
   firstSceneNumber,
   onSceneChange,
   disableEndLink = false,
}: Props) {
   const { scene, setNextScene } = useScene(data, firstSceneNumber, onSceneChange)

   if (!scene) {
      return <p>Error: Scene not found</p>
   }

   return (
      <SwitchFade timeout={500} switchKey={scene.id}>
         <SceneLayout
            data={scene}
            selectAnswer={
               scene.answers?.length ? (
                  <SelectAnswer answers={scene.answers} onSelect={setNextScene} />
               ) : (
                  <EndSceneLink
                     href={`/stories/${scene.storyId}/results`}
                     disabled={disableEndLink}
                  />
               )
            }
         />
      </SwitchFade>
   )
}
