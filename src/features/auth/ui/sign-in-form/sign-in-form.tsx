"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "../form-layout/form-layout"
import { useMutation } from "@tanstack/react-query"
import { userService } from "@/src/entities/user"

type SignInForm = {
   login: string
   password: string
}

export const SignInForm = () => {
   const loginMutation = useMutation({
      mutationFn: userService.login,
      onSuccess: (res) => {
         console.log(res)
      },
   })
   const { register, handleSubmit } = useForm<SignInForm>()

   const onSubmit = (data: SignInForm) => {
      loginMutation.mutate(data)
   }

   return (
      <AuthFormLayout
         onSubmit={handleSubmit(onSubmit)}
         inputs={
            <>
               <TextInput variant="outlined" placeholder="Login" {...register("login")} />
               <TextInput
                  type="password"
                  variant="outlined"
                  placeholder="Password"
                  {...register("password")}
               />
               <Button type="submit" disabled={loginMutation.isPending}>
                  Sign in
               </Button>
            </>
         }
         link={<Link href="/sign-up">Doesn&apos;t have an account? Sign up!</Link>}
         error={undefined}
      />
   )
}
