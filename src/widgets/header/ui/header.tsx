import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import { HeaderMenu } from "./header-menu/header-menu"
import { userService, type Session } from "@/src/entities/user"
import { getTokenFromCookie } from "@/src/features/auth"

export async function Header() {
   const [isAuth] = await getSession()

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu isAuth={isAuth} key={+isAuth} />
            </div>
         </Wrapper>
      </header>
   )
}

async function getSession(): Promise<[boolean, Session | null]> {
   const token = await getTokenFromCookie()

   if (!token) {
      return [false, null] as const
   }

   const session = await userService.getSession(token)
   if (!session) {
      return [false, session] as const
   }

   return [true, session] as const
}
