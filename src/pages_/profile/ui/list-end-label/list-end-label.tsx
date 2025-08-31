import { Button } from "@/src/shared/ui";
import styles from "./list-end-label.module.css"
import Link from "next/link";

export function ListEndLabel() {
   return (
      <div className={styles.finalBlock}>
         <p>Have an idea? Turn it into a story!</p>
         <Button as={Link} href={"/create"}>Create a story</Button>
      </div>
   )
}
