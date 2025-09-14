"use client"

import { useSceneControls } from "../../model/context"
import stylse from "./toggle-voiceover-btn.module.css"

export function ToggleVoiceoverBtn() {
   const { options, toggleVoiceover } = useSceneControls()

   return (
      <button className={stylse.btn} onClick={toggleVoiceover}>
         Voiceover: {options.voiceover ? "on" : "off"}
      </button>
   )
}
