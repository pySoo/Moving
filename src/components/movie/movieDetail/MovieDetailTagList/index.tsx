import GradientTag from '@/components/common/GradientTag';

import MovieDetailTitle from '../MovieDetailTitle';
import styles from './styles.module.scss';

interface MovieDetailTagListProps {
  title: string;
  tagList: string[];
}

export default function MovieDetailTagList({ title, tagList }: MovieDetailTagListProps) {
  return (
    <div className={styles.detailTagList}>
      <MovieDetailTitle title={title} />
      <ul className={styles.tagList}>
        {tagList.map((tag) => (
          <li key={tag}>
            <GradientTag title={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
}
