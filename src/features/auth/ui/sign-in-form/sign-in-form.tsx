"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "../form-layout/form-layout"
import { SignInFormData } from "../../model/types"
import { useSignInForm } from "../../model/use-sign-in-form"

export const SignInForm = () => {
   const { register, handleSubmit } = useForm<SignInFormData>()
   const { loginMutation, onSubmit } = useSignInForm()

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
               <Button
                  type="submit"
                  disabled={loginMutation.isPending || loginMutation.isSuccess}
               >
                  Sign in
               </Button>
            </>
         }
         link={<Link href="/sign-up">Doesn&apos;t have an account? Sign up!</Link>}
         error={undefined}
      />
   )
}
