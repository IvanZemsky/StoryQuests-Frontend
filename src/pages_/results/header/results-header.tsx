import styles from "./results-header.module.css"

type Props = {
   storyName: string
}

export function ResultsHeader({ storyName }: Props) {
   return <h1 className={styles.title}>Statistics: {storyName} </h1>
}
