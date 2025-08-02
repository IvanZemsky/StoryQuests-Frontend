import styles from './styles.module.css'

type Props = {
  limit: number
}

export const StoriesSkeleton = ({limit}: Props) => {
  const skeletonBlocks = Array.from({ length: limit }, (_, index) => (
    <div key={index} className={styles.skeletonBlock}></div>
  ));

  return (
    <div className={styles.skeleton}>
      {skeletonBlocks}
    </div>
  );
}