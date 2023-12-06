import styles from './styles.module.scss';

interface GradientTagProps {
  title: string;
}

export default function GradientTag({ title }: GradientTagProps) {
  return (
    <div className={styles.gradientTag}>
      <span>{title}</span>
    </div>
  );
}
