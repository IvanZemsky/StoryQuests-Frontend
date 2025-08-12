import styles from "./form-layout.module.css"


type Props = {
   onSubmit: React.FormEventHandler<HTMLFormElement>
   inputs: React.ReactNode
   link: React.ReactNode
   error?: string
}

export function AuthFormLayout({ inputs, link, error, onSubmit }: Props) {
   return (
      <div className={styles.auth}>
         <form className={styles.form} onSubmit={onSubmit}>
            {inputs}
            {link}
         </form>

         {error && <p className={styles.error}>Incorrect login or password</p>}
      </div>
   )
}
