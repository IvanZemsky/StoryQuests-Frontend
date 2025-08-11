"use client"

import { useRef } from "react"
import styles from "./switch-fade.module.css"
import { CSSTransition, SwitchTransition } from "react-transition-group"

type Props = {
   children: React.ReactNode
   timeout: number
   switchKey: React.Key
}

export function SwitchFade({ switchKey, children, timeout }: Props) {
   const nodeRef = useRef<HTMLDivElement>(null)

   const classNames = {
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      exit: styles.fadeExit,
      exitActive: styles.fadeExitActive,
   }
   return (
      <SwitchTransition>
         <CSSTransition
            key={switchKey}
            nodeRef={nodeRef}
            classNames={classNames}
            timeout={timeout}
         >
            <div ref={nodeRef}>{children}</div>
         </CSSTransition>
      </SwitchTransition>
   )
}
