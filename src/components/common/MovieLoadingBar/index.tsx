import LoadSpinner from '../LoadSpinner';
import styles from './styles.module.scss';

export default function MovieLoadingBar() {
  return (
    <div className={styles.loadingBar}>
      <LoadSpinner />
      <span className={styles.loadingText}>영화 정보를 불러올게요 👀</span>
    </div>
  );
}
