"use client"

import styles from "./styles.module.css"
import BurgerIcon from "@/src/shared/assets/icons/burger.svg"
import CrossIcon from "@/src/shared/assets/icons/cross.svg"
import { SignInLink } from "../sign-in-link"
import { NavigationLink, Tooltip } from "@/src/shared/ui"
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
            {isAuth && <NavigationLink href="/create">Create</NavigationLink>}
            {isAuth ? (
               <Tooltip content="Profile">
                  <ProfileLink />
               </Tooltip>
            ) : (
               <SignInLink />
            )}

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
