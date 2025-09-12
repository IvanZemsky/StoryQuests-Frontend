"use client"

import { useState } from "react"
import styles from "./copy-link.module.css"
import { Button } from "@/src/shared/ui"
import { copyToClipboard } from "@/src/shared/lib"
import { CopyLinkModal } from "./copy-link-modal"
import LinkIcon from "@/src/shared/assets/icons/link.svg"

export function CopyLinkBtn({ className }: { className?: string }) {
   const [isCopied, setIsCopied] = useState(false)
   const [error, setError] = useState(false)

   const handleClick = () => {
      const url = window.location.href

      copyToClipboard(
         url,
         () => {
            setError(false)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 3000)
         },
         () => {
            setError(true)
            setIsCopied(false)
         },
      )
   }

   return (
      <>
         <Button className={className} onClick={handleClick}>
            <LinkIcon />
         </Button>
         {isCopied && <CopyLinkModal open={isCopied} error={error} />}
      </>
   )
}
