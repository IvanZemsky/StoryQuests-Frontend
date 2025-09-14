"use client"

import { useVoiceover } from "@/src/shared/lib"
import { createContext, useContext } from "react"

type SceneOptions = {
   voiceover: boolean
}

type SceneControlsContextValue = {
   options: SceneOptions
   voiceover: ReturnType<typeof useVoiceover>
   toggleVoiceover: () => void
}

export const SceneControlsContext = createContext<SceneControlsContextValue | undefined>(
   undefined,
)

export function useSceneControls() {
   const context = useContext(SceneControlsContext)

   if (!context) {
      throw new Error("useSceneControls must be used within a SceneControlsProvider")
   }

   return context
}
