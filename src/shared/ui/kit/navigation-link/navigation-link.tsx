"use client"

import clsx from "clsx"
import "./navigation-link.css"
import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"
import { useActiveLink } from "../../../lib/ui/navigation"

type Props = {
   href: string
} & PropsWithChildren<LinkProps>

export function NavigationLink({ href, children, ...props }: Props) {
   const activeStyle = useActiveLink(href, "active")

   return (
      <Link href={href} className={clsx("ui-navigation-link", activeStyle)} {...props}>
         {children}
      </Link>
   )
}
