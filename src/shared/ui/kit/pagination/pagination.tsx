import "./pagination.css"
import { Button } from "../button/button"
import clsx from "clsx"
import Link from "next/link"

type Props = {
   previousParams?: Record<string, string> | URLSearchParams | undefined
   current: number
   total: number
   href: string
   className?: string
}

export function Pagination({ current, total, href, className, previousParams }: Props) {
   const pages = Array.from({ length: total }, (_, item) => item + 1)

   const getUrl = (page: number) => {
      if (!previousParams) return `${href}?page=${page}`

      const params = new URLSearchParams(previousParams)
      params.delete("page")

      const url =
         params.size > 0
            ? `${href}?${params.toString()}&page=${page}`
            : `${href}?page=${page}`

      return url
   }

   return (
      <div className={clsx("ui-pagination", className)}>
         {pages.map((page) => (
            <Button
               href={getUrl(page)}
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
