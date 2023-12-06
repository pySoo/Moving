import styles from './styles.module.scss';

export default function EmptyResultText() {
  return (
    <div className={styles.emptyResultText}>
      <p>검색 결과가 없습니다.</p>
      <p>다른 제목으로 검색해 보세요!</p>
    </div>
  );
}
