"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "./form-layout/form-layout"
import { useSignUpForm } from "../model/use-sign-up-form"
import { SignUpFormData } from "../model/types"
import styles from "./auth-form.module.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema } from "../model/schemas"

export const SignUpForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<SignUpFormData>({ resolver: zodResolver(AuthFormSchema) })

   const { loginMutation, onSubmit } = useSignUpForm()

   return (
      <AuthFormLayout
         onSubmit={handleSubmit(onSubmit)}
         inputs={
            <div className={styles.inputs}>
               <TextInput variant="outlined" placeholder="Login" {...register("login")} />
               <p className={styles.inputError}>{errors.login?.message}</p>
               <TextInput
                  type="password"
                  variant="outlined"
                  placeholder="Password"
                  {...register("password")}
               />
               <p className={styles.inputError}>{errors.password?.message}</p>
               <Button
                  type="submit"
                  disabled={loginMutation.isPending || loginMutation.isSuccess}
               >
                  Sign in
               </Button>
            </div>
         }
         link={<Link href="/sign-in">Already have an account? Sign in!</Link>}
         error={loginMutation.error?.response?.data.message}
      />
   )
}
