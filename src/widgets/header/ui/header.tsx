import { Logo, Wrapper } from "@/src/shared/ui"
import styles from "./styles.module.css"
import { HeaderMenu } from "./header-menu/header-menu"

export const Header = async () => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />
               <HeaderMenu/>
            </div>
         </Wrapper>
      </header>
   )
}
