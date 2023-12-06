import styles from './styles.module.scss';

interface MovieDetailTitleProps {
  title: string;
}

export default function MovieDetailTitle({ title }: MovieDetailTitleProps) {
  return <p className={styles.detailTitle}>{title}</p>;
}
