"use client"

import Link from "next/link"
import { Button } from "../shared/ui"

export function Test() {
   return (
      <div>
         <Button as={Link}>Button</Button>
      </div>
   )
}
