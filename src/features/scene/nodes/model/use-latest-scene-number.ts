"use client"

import { useRef } from "react"

export function useLatestSceneNumber(initialNumber: number) {
   const sceneNumber = useRef(initialNumber)

   const updateSceneNumber = () => {
      sceneNumber.current += 1
      return sceneNumber.current
   }

   return updateSceneNumber
}
