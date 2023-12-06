import { useRecoilValue } from 'recoil';

import { movieAtom } from '@/atoms/movie';
import SkeletonList from '@/components/common/SkeletonList';

import MovieItem from '../MovieItem';
import styles from './styles.module.scss';

export default function MovieGridList() {
  const movieState = useRecoilValue(movieAtom);
  const { keyword, movieList, isLoading } = movieState;

  return (
    <div className={styles.movieGridList}>
      <p className={styles.keywordWrapper}>
        {!isLoading && (
          <span>
            <span className={styles.keyword}>{keyword}</span>
            검색 결과입니다.
          </span>
        )}
      </p>
      <ul className={styles.movieList}>
        {movieList.map((movie, idx) => (
          <MovieItem key={`${movie.imdbID} +${idx}`} movie={movie} />
        ))}
        {isLoading && <SkeletonList />}
      </ul>
    </div>
  );
}
