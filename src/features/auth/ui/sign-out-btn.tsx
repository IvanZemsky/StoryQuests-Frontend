"use client"

import { Button } from "@/src/shared/ui"
import { useSignOut } from "../model/use-sign-out"


export function SignOutBtn() {
   const { mutate } = useSignOut()

   return <Button onClick={mutate}>Sign out</Button>
}
