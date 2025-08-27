import styles from "./flow-layout.module.css"

import "@xyflow/react/dist/style.css"
import clsx from "clsx"

type Props = React.ComponentProps<"div"> & {
   title: string
   panel?: React.ReactNode
   field?: React.ReactNode
}

export const FieldLayout = ({
   title,
   panel,
   field,
   className,
   ...attrs
}: Props) => {
   return (
      <div className={clsx(styles.content, className)} {...attrs}>
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.field}>
            {panel}
            {field}
         </div>
      </div>
   )
}
