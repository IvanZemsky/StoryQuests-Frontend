"use client"

import type { Scene } from "@/src/entities/scene"
import { EndSceneLink, SceneLayout, SelectAnswer } from "@/src/features/scene"
import { useState } from "react"

type Props = {
   data: Scene[]
   firstSceneNumber: number
   disableEndLink?: boolean
}

export function Scene({ data, firstSceneNumber, disableEndLink = false }: Props) {
   const [scene, setScene] = useState<Scene | null>(() =>
      findFirstScene(data, firstSceneNumber),
   )

   if (!scene) {
      return <p>Error: Scene not found</p>
   }

   const setNextScene = (nextSceneNumber: number) => {
      setScene(data.find((scene) => scene.number === nextSceneNumber) || null)
   }

   return (
      <SceneLayout
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
         data={scene}
      />
   )
}

function findFirstScene(data: Scene[], sceneNumber: number) {
   return data.find((scene) => scene.number === sceneNumber) || null
}
