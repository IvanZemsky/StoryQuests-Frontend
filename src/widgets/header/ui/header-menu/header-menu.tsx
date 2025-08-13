"use client"

import styles from "./styles.module.css"
import BurgerIcon from "@/src/shared/assets/icons/burger.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import { SignInLink } from "../sign-in-link"
import { NavigationLink } from "@/src/shared/ui"
import clsx from "clsx"
import { useState } from "react"
import { ProfileLink } from "../profile-link"

type Props = {
   isAuth: boolean
}

export function HeaderMenu({ isAuth }: Props) {
   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const handleBurgerClick = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   return (
      <nav className={styles.nav}>
         <ul className={clsx({ [styles.opened]: isMenuOpened })}>
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/stories">Stories</NavigationLink>
            <NavigationLink href="/create">Create</NavigationLink>
            {isAuth ? <ProfileLink /> : <SignInLink />}

            <button className={styles.closeBtn} onClick={handleBurgerClick}>
               <CrossIcon />
            </button>
         </ul>

         <button className={styles.burger} onClick={handleBurgerClick}>
            <BurgerIcon />
         </button>
      </nav>
   )
}
