"use client"

import { userService } from "@/src/entities/user"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { SignInFormData } from "./types"

export function useSignInForm() {
   const router = useRouter()

   const loginMutation = useMutation({
      mutationFn: userService.login,
      onSuccess() {
         router.replace("/")
         router.refresh()
      },
   })

   const onSubmit = (data: SignInFormData) => {
      loginMutation.mutate(data)
   }

   return { loginMutation, onSubmit }
}
