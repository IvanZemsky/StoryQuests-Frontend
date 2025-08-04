import "./pagination.css"
import { Button } from "../button/button"
import clsx from "clsx"
import Link from "next/link"

type Props = {
   current: number
   total: number
   href: string
   className?: string
}

export function Pagination({ current, total, href, className }: Props) {
   const pages = Array.from({ length: total }, (_, item) => item + 1)

   return (
      <div className={clsx("ui-pagination", className)}>
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
