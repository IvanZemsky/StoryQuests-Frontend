import styles from "./field-layout.module.css"

import "@xyflow/react/dist/style.css"
import clsx from "clsx"

type Props = React.ComponentProps<"div"> & {
   title: string
   scenePanel?: React.ReactNode
   field?: React.ReactNode
}

export const FieldLayout = ({
   title,
   scenePanel,
   field,
   className,
   ...attrs
}: Props) => {
   return (
      <div className={clsx(styles.content, className)} {...attrs}>
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.field}>
            {scenePanel}
            {field}
         </div>
      </div>
   )
}
