"use client"

import { useVoiceover } from "@/src/shared/lib"
import { SceneControlsContext } from "./context"
import { useState } from "react"

export function SceneControlsProvider({ children }: { children: React.ReactNode }) {
   const voiceover = useVoiceover()
   const [options, setOptions] = useState({ voiceover: false })

   const toggleVoiceover = () => {
      voiceover.cancel()
      setOptions({ voiceover: !options.voiceover })
   }

   return (
      <SceneControlsContext.Provider value={{ voiceover, toggleVoiceover, options }}>
         {children}
      </SceneControlsContext.Provider>
   )
}
