import styles from './styles.module.scss';

export default function SkeletonList() {
  const skeletonArray = Array.from({ length: 10 }, () => 0);
  return (
    <>
      {skeletonArray.map((_, idx) => (
        <div key={idx} className={styles.skeletonList} />
      ))}
    </>
  );
}
