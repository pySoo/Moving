import { useRecoilState } from 'recoil';

import { movieAtom } from '@/atoms/movie';
import MovieLoadingBar from '@/components/common/MovieLoadingBar';
import { fetchMoreMovieList } from '@/services/movie';
import { MovieListResponse } from '@/types/movieTypes';

import DefaultMovieList from '../DefaultMovieList';
import EmptyResultText from '../EmptyResultText';
import MovieGridList from '../MovieGridList';
import MovieScrollObserver from '../MovieScrollObserver';
import styles from './styles.module.scss';

export default function MovieListSection() {
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const { movieList, keyword, page, isScrollEnd, isLoading } = movieState;

  const fetchNextData = async () => {
    if (!keyword || isScrollEnd) return;

    setMovieState((prevState) => ({ ...prevState, isLoading: true }));
    const { Search, totalResults }: MovieListResponse = await fetchMoreMovieList({
      keyword,
      page,
    });
    setMovieState((prevState) => ({ ...prevState, isLoading: false }));

    if (Search) {
      const totalPage = Math.ceil(Number(totalResults) / 10);

      setMovieState((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
        isScrollEnd: prevState.page >= totalPage ? true : false,
        movieList: [...prevState.movieList, ...Search],
      }));
    }
  };

  return (
    <section className={styles.movieListSection}>
      <div className={styles.wrapper}>
        {movieList.length > 0 && <MovieGridList />}
        <MovieScrollObserver onFetchData={fetchNextData} />
        {movieList.length === 0 && isLoading && <MovieLoadingBar />}
        {movieList.length === 0 && !isLoading && (
          <>{keyword.length === 0 ? <DefaultMovieList /> : <EmptyResultText />}</>
        )}
      </div>
    </section>
  );
}
