import { useRecoilState } from 'recoil';

import { movieAtom } from '@/atoms/movie';
import BackspaceIcon from '@/components/common/icons/BackspaceIcon';
import SearchIcon from '@/components/common/icons/SearchIcon';
import { useInput } from '@/hooks/useInput';
import { fetchMovieList } from '@/services/movie';
import { MovieListResponse } from '@/types/movieTypes';

import styles from './styles.module.scss';

export default function SearchForm() {
  const { value: keyword, setValue, handleInputChange } = useInput();

  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const searchMovie = async () => {
    if (!keyword.trim()) {
      alert('검색어를 입력해 주세요');
      return;
    }

    if (movieState.keyword === keyword) {
      alert('이전 검색어와 같은 제목이에요');
      return;
    }

    setMovieState((movieState) => ({
      ...movieState,
      keyword,
      isLoading: true,
      page: 0,
      movieList: [],
    }));

    const { Search }: MovieListResponse = await fetchMovieList({ keyword });

    setMovieState((movieState) => ({
      ...movieState,
      isLoading: false,
      page: Search ? 1 : 0,
      movieList: Search ?? [],
    }));

    resetInput();
  };

  const resetInput = () => {
    setValue('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchMovie();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.searchBtn}>
        <SearchIcon />
      </button>
      <input
        className={styles.searchInput}
        placeholder="영화 제목을 검색해 보세요"
        value={keyword}
        onChange={handleInputChange}
      />
      <button type="button" className={styles.resetBtn} onClick={resetInput}>
        <BackspaceIcon />
      </button>
    </form>
  );
}
