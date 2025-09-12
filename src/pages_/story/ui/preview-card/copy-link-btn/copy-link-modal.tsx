import styles from "./copy-link.module.css"

type Props = {
   open: boolean
   error: boolean
}

export function CopyLinkModal({ open, error }: Props) {
   if (!open) return null

   return <div className={styles.modal}>{error ? error : "Link copied"}</div>
}
