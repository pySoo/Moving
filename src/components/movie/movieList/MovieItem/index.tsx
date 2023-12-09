import { useNavigate } from 'react-router-dom';

import GradientTag from '@/components/common/GradientTag';
import MoviePoster from '@/components/movie/MoviePoster';
import { Movie } from '@/types/movieTypes';

import styles from './styles.module.scss';

interface MovieListItemProps {
  movie: Movie;
}

export default function MovieListItem({ movie }: MovieListItemProps) {
  const navigate = useNavigate();

  const handleOpenMovieModal = () => {
    navigate(`/?movieId=${movie.imdbID}`);
  };

  return (
    <li className={styles.movieItem} onClick={handleOpenMovieModal}>
      <div className={styles.card}>
        <div className={styles.cardFront}>{<MoviePoster src={movie.Poster} />}</div>
        <div className={styles.cardBack}>
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <span className={styles.title}>{movie.Title}</span>
              <span className={styles.year}>{movie.Year}</span>
            </div>
            <GradientTag title={movie.Type} />
          </div>
        </div>
      </div>
    </li>
  );
}
