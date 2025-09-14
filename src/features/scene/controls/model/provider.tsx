"use client"

import { useVoiceover } from "@/src/shared/lib"
import { SceneControlsContext } from "./context"

export function SceneControlsProvider({ children }: { children: React.ReactNode }) {
   const voiceover = useVoiceover()

   return (
      <SceneControlsContext.Provider value={{ voiceover }}>
         {children}
      </SceneControlsContext.Provider>
   )
}
