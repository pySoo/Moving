import MovieListItem from '../MovieItem';
import styles from './styles.module.scss';

export default function DefaultMovieList() {
  const mockMovieData = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNThkNjgxNGQtOTIxMy00ZTFmLWIwMDItYzE5YzM3ZDMzNDE3XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX700.jpg',
    Title: 'Love Actually',
    Type: 'movie',
    Year: '2003',
    imdbID: 'tt0314331',
  };

  return (
    <div className={styles.defaultMovieList}>
      <span className={styles.title}>좋아하는 영화를 검색해 보세요 🎁</span>
      <div className={styles.movieListWrapper}>
        <MovieListItem movie={mockMovieData} />
      </div>
    </div>
  );
}
