import { Button } from "@/src/shared/ui"
import Link from "next/link"

export function SignInLink() {
   return (
      <Button as={Link} href="/sign-in">
         Log in
      </Button>
   )
}
