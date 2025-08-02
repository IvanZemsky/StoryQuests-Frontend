import { PropsWithChildren } from "react"
import { Header } from "@/src/widgets/header"
import styles from "./styles.module.css"
import { Footer } from "@/src/widgets/footer"

export function MainLayout({ children }: PropsWithChildren) {
   return (
      <div className={styles.app}>
         <Header />
         <main>{children}</main>
         <Footer />
      </div>
   )
}
