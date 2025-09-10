import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import { HeaderMenu } from "./header-menu/header-menu"
import { userService, type Session } from "@/src/entities/user"
import { getTokenFromCookie } from "@/src/features/auth"

export async function Header() {
   const session = await getSession()

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu isAuth={!!session} key={+!!session} />
            </div>
         </Wrapper>
      </header>
   )
}

async function getSession(): Promise<Session | null> {
   const token = await getTokenFromCookie()

   if (!token) return null

   const session = await userService.getSession(token)
   if (!session) {
      return null
   }

   return session
}
