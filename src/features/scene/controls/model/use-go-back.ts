import { useEffect, useState } from "react"

export function useGoToPreviousScene(onGoBack?: () => void) {
   const [previousSceneNumber, setPreviousSceneNumber] = useState<number | null>(null)

   const setPreviousScene = (sceneNumber: number) => {
      setPreviousSceneNumber(sceneNumber)
   }

   useEffect(() => {
      onGoBack?.()
   }, [previousSceneNumber])

   return { previousSceneNumber, setPreviousScene }
}
