import { Button } from "@/src/shared/ui"
import styles from "./submit-btn.module.css"
import { ButtonProps } from "@/src/shared/ui/kit/button/button"

export function CreateStoryFormSubmitBtn(props: ButtonProps<"button">) {
   return (
      <Button className={styles.submitBtn} {...props} type="submit" variant="gradient">
         Create
      </Button>
   )
}
