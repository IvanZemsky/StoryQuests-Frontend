"use client"

import clsx from "clsx"

type Props = {
   className?: string
   children: React.ReactNode
}

export function TagsLabel({ className, children }: Props) {
   return <p className={clsx("ui-tags-input-label", className)}>{children}</p>
}
