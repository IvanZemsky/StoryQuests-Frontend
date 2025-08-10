"use client"

import type { Scene } from "@/src/entities/scene"
import { EndSceneLink, SceneLayout, SelectAnswer } from "@/src/features/scene"
import { useState } from "react"

type Props = {
   data: Scene[]
}

export function Scene({ data }: Props) {
   const [scene, setScene] = useState<Scene | null>(() => findFirstScene(data))

   if (!scene) {
      return <p>Error: Scene not found</p>
   }

   const setNextScene = (nextSceneNumber: string) => {
      setScene(data.find((scene) => scene.id === nextSceneNumber) || null)
   }

   return (
      <SceneLayout
         selectAnswer={
            scene.answers?.length ? (
               <SelectAnswer answers={scene.answers} onSelect={setNextScene} />
            ) : (
               <EndSceneLink href={`/stories/${scene.storyId}/results`} />
            )
         }
         data={scene}
      />
   )
}

function findFirstScene(data: Scene[]) {
   return data.find((scene) => scene.id === "scene-1") || null
}
