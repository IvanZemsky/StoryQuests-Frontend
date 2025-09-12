"use client"

import { useForm } from "react-hook-form"
import Link from "next/link"
import { TextInput, Button } from "@/src/shared/ui"
import { AuthFormLayout } from "./form-layout/form-layout"
import { SignInFormData } from "../model/types"
import { useSignInForm } from "../model/use-sign-in-form"
import styles from "./auth-form.module.css"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema } from "../model/schemas"

export const SignInForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<SignInFormData>({
      resolver: zodResolver(AuthFormSchema),
   })
   const { loginMutation, onSubmit } = useSignInForm()

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
         link={<Link href="/sign-up">Doesn&apos;t have an account? Sign up!</Link>}
         error={loginMutation.error?.response?.data.message}
      />
   )
}
