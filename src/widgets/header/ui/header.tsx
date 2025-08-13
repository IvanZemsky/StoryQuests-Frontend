import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import { HeaderMenu } from "./header-menu/header-menu"

export async function Header() {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu isAuth={false} />
            </div>
         </Wrapper>
      </header>
   )
}
