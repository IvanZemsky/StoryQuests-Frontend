"use client"

import type { Scene } from "@/src/entities/scene"
import { useState, useEffect } from "react"

export function useScene(
   data: Scene[],
   firstSceneNumber: number,
   onSceneChange?: (scene: Scene | null) => void,
) {
   const [scene, setScene] = useState<Scene | null>(
      findSceneByNumber(data, firstSceneNumber),
   )

   const setNextScene = (nextSceneNumber: number) => {
      setScene(findSceneByNumber(data, nextSceneNumber))
   }

   useEffect(() => {
      onSceneChange?.(scene)
   }, [scene])

   return { scene, setNextScene }
}

function findSceneByNumber(data: Scene[] | null, sceneNumber: number) {
   return data?.find((scene) => scene.number === sceneNumber) || null
}
