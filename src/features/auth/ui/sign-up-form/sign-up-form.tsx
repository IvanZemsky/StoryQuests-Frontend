"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "../form-layout/form-layout"

type SignUpForm = {
   login: string
   password: string
}

export const SignUpForm = () => {
   const { register, handleSubmit } = useForm<SignUpForm>()

   const onSubmit = (data: SignUpForm) => {}

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
               <Button type="submit">Sign in</Button>
            </>
         }
         link={<Link href="/sign-in">Already have an account? Sign in!</Link>}
         error={undefined}
      />
   )
}
