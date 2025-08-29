import { Button } from "@/src/shared/ui"
import styles from "./preview-btn.module.css"
import { MouseEventHandler } from "react"

type Props = {
   onClick?: MouseEventHandler<HTMLButtonElement>
}

export function PreviewBtn({ onClick }: Props) {
   return (
      <Button className={styles.btn} onClick={onClick} variant="outlined">
         Preview
      </Button>
   )
}
