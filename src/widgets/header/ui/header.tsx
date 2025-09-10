import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import { HeaderMenu } from "./header-menu/header-menu"
import { getSession} from "@/src/entities/user"

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
