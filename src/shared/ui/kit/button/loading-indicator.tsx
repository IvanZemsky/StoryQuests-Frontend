"use client"

import { useLinkStatus } from "next/link"
import "./button.css"

export function LoadingIndicator({ children }: { children: React.ReactNode }) {
   const { pending } = useLinkStatus()
   return pending ? <div className="ui-pending-indicator">{children}</div> : children
}
