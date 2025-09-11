"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "./form-layout/form-layout"
import { useSignUpForm } from "../model/use-sign-up-form"
import { SignUpFormData } from "../model/types"

export const SignUpForm = () => {
   const { register, handleSubmit } = useForm<SignUpFormData>()
   const { loginMutation, onSubmit } = useSignUpForm()

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
         link={<Link href="/sign-in">Already have an account? Sign in!</Link>}
         error={loginMutation.error?.response?.data.message}
      />
   )
}
