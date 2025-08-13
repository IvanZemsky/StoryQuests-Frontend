import styles from "./hero.module.css"

export function Hero() {
   return (
      <div className={styles.heroWrap}>
         <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
               A website with interactive text story quests
            </h1>
         </div>
      </div>
   )
}
