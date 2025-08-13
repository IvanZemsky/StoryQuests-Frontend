import { AuthPageLayout, SignUpForm } from "@/src/features/auth"

export const SignUpPage = () => {
   return (
      <AuthPageLayout title="Registration">
         <SignUpForm />
      </AuthPageLayout>
   )
}
