import { MovieInfo } from '@/types/movieTypes';

import MovieDetailTitle from '../MovieDetailTitle';
import styles from './styles.module.scss';

interface MovieDetailInfoProps {
  movieInfo: MovieInfo;
}

export default function MovieDetailInfo({ movieInfo }: MovieDetailInfoProps) {
  return (
    <>
      {Object.entries(movieInfo).map(([key, value]) => (
        <div key={key} className={styles.movieDetailInfo}>
          <MovieDetailTitle title={key} />
          <p>{value}</p>
        </div>
      ))}
    </>
  );
}
