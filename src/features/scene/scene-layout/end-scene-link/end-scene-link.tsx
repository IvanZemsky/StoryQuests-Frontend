import { Button } from "@/src/shared/ui"
import styles from "./end-scene-link.module.css"
import ArrowRightIcon from "@/src/shared/assets/icons/arrow-right.svg"
import Link from "next/link"

type Props = {
   href: string
}

export function EndSceneLink({ href }: Props) {
   return (
      <Button
         as={Link}
         variant="filled"
         href={href}
         className={styles.endLink}
         leftIcon={<ArrowRightIcon />}
         defaultHover={false}
      />
   )
}
