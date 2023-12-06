import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import MovieDetailInfo from '@/components/movie/movieDetail/MovieDetailInfo';
import MovieDetailTagList from '@/components/movie/movieDetail/MovieDetailTagList';
import MovieRatingList from '@/components/movie/movieDetail/MovieRatingList';
import MoviePoster from '@/components/movie/MoviePoster';
import { fetchMovieDetail } from '@/services/movie';
import { MovieDetail, MovieInfo } from '@/types/movieTypes';

import styles from './styles.module.scss';

export default function MovieModal() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');

  const { data } = useQuery(
    ['movieDetail', movieId],
    async () => {
      if (movieId == null) return;

      const movieDetail: MovieDetail = await fetchMovieDetail({ id: movieId });

      const movieInfo: MovieInfo = {
        Director: movieDetail.Director,
        Actors: movieDetail.Actors,
        Awards: movieDetail.Awards,
        Plot: movieDetail.Plot,
      };

      return { movieDetail, movieInfo };
    },
    { enabled: !!movieId, suspense: true },
  );

  function upgradeImageQuality(image: string) {
    return image?.replace('SX300', 'SX700');
  }

  if (!data) return null;

  const { movieDetail, movieInfo } = data;

  return (
    <div className={styles.movieModal}>
      <div className={styles.wrapper}>
        <div className={styles.moviePoster}>
          <MoviePoster src={upgradeImageQuality(movieDetail.Poster)} />
        </div>
        <div className={styles.movieInfo}>
          <div className={styles.movieTitle}>
            <p className={styles.title}>{movieDetail.Title}</p>
            <p className={styles.released}>{movieDetail.Released}</p>
          </div>
          <div className={styles.movieDescription}>
            <MovieDetailTagList title="Genre" tagList={movieDetail.Genre?.split(',')} />
            <MovieDetailInfo movieInfo={movieInfo} />
          </div>
        </div>
        <MovieRatingList ratingList={movieDetail.Ratings} />
      </div>
    </div>
  );
}
