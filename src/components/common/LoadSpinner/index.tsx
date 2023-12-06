import styles from './styles.module.scss';

export default function LoadSpinner() {
  return (
    <div className={styles.loadSpinnerWrapper}>
      <span className={styles.loadSpinner} />
    </div>
  );
}
