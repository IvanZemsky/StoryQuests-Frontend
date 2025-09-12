"use client"

import { Button } from "@/src/shared/ui"
import { getShareToTelegramLink } from "@/src/shared/lib"
import { useEffect, useState } from "react"
import TelegramIcon from "@/src/shared/assets/icons/telegram.svg"

export function ShareTelegramBtn({ className }: { className?: string }) {
   const [link, setLink] = useState("")

   useEffect(() => {
      if (typeof window !== "undefined") {
         setLink(window.location.href)
      }
   }, [])

   return (
      <Button
         className={className}
         as="a"
         href={getShareToTelegramLink(link)}
         target="_blank"
      >
         <TelegramIcon />
      </Button>
   )
}
