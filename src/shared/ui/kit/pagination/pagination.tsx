import { MouseEventHandler } from "react"
import "./pagination.css"
import { Button } from "../button/button"
import clsx from "clsx"
import Link from "next/link"

type Props = {
   current: number
   total: number
   href: string
}

export function Pagination({ current, total, href }: Props) {
   const pages = Array.from({ length: total }, (_, item) => item + 1)

   return (
      <div className="ui-pagination">
         {pages.map((page) => (
            <Button
               href={`${href}?page=${page}`}
               as={Link}
               key={page}
               className={clsx("ui-pagination-btn", {
                  active: current === page,
               })}
            >
               {page}
            </Button>
         ))}
      </div>
   )
}
