"use client"

import { useRef } from "react"
import styles from "./fade.module.css"
import { CSSTransition } from "react-transition-group"
import { CSSTransitionProps } from "react-transition-group/CSSTransition"

type Props = CSSTransitionProps & {
   children: React.ReactNode
   timeout: number
}

export function Fade({ inProp, children, timeout, ...props }: Props) {
   const nodeRef = useRef<HTMLDivElement>(null)

   const classNames = {
      enter: styles.fadeEnter,
      enterActive: styles.fadeEnterActive,
      exit: styles.fadeExit,
      exitActive: styles.fadeExitActive,
   }

   return (
      <CSSTransition
         nodeRef={nodeRef}
         in={inProp}
         timeout={timeout}
         classNames={classNames}
         unmountOnExit
         {...props}
      >
         <div ref={nodeRef} className={styles.node}>
            {children}
         </div>
      </CSSTransition>
   )
}
