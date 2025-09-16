"use client"

import { userService } from "@/src/entities/user"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export function useSignOut() {
   const router = useRouter()

   return useMutation({
      mutationFn: userService.logout,
      async onSuccess() {
         router.replace("/")
         router.refresh()
      },
   })
}
