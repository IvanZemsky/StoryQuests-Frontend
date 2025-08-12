import { AuthPageLayout, SignInForm } from "@/src/features/auth"

export const SignInPage = () => {
   return (
      <AuthPageLayout title="Login">
         <SignInForm />
      </AuthPageLayout>
   )
}
