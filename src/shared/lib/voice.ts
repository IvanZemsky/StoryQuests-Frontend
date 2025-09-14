"use client"

import { useState, useEffect } from "react"
import { useEventListener } from "./ui/events"

export function useVoiceover() {
   const [synth, setSynth] = useState<SpeechSynthesis | null>(null)

   useEffect(() => {
      if (typeof window !== "undefined") {
         const speechSynth = window.speechSynthesis
         setSynth(speechSynth)

         speechSynth.cancel()

         return () => {
            speechSynth.cancel()
         }
      }
   }, [])

   useEventListener("window", ["beforeunload"], () => {
      if (synth) {
         synth.cancel()
      }
   })

   const speak = (text: string) => {
      if (!synth) return

      synth.cancel()

      if (text) {
         const utterance = new SpeechSynthesisUtterance(text)
         utterance.lang = "en-US"
         utterance.rate = 0.8
         synth.speak(utterance)
      }
   }

   const cancel = () => {
      synth?.cancel()
   }

   const pause = () => {
      synth?.pause()
   }

   const resume = () => {
      synth?.resume()
   }

   return { isSpeaking: !!synth?.speaking, speak, cancel, pause, resume }
}
