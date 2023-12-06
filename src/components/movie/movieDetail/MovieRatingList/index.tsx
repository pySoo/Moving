import { Rating } from '@/types/movieTypes';

import MovieDetailTitle from '../MovieDetailTitle';
import styles from './styles.module.scss';

interface MovieRatingListProps {
  ratingList: Rating[];
}

export default function MovieRatingList({ ratingList }: MovieRatingListProps) {
  return (
    <div className={styles.movieRatingList}>
      <MovieDetailTitle title="Ratings" />
      <ul className={styles.ratingList}>
        {ratingList.map(({ Source, Value }) => (
          <li key={Source}>
            <div className={styles.ratingBox}>
              <p>{Source === 'Internet Movie Database' ? 'Internet Movie DB' : Source}</p>
              <p>{Value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
