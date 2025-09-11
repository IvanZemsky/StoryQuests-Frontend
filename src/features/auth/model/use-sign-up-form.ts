"use client"

import { userService } from "@/src/entities/user"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { SignUpFormData } from "./types"
import { APIAxiosError } from "@/src/shared/api"

export function useSignUpForm() {
   const router = useRouter()

   const loginMutation = useMutation<void, APIAxiosError, SignUpFormData>({
      mutationFn: userService.register,
      onSuccess() {
         router.replace("/")
         router.refresh()
      },
   })

   const onSubmit = (data: SignUpFormData) => {
      loginMutation.mutate(data)
   }

   return { loginMutation, onSubmit }
}
