import { atom } from 'recoil';

import { MovieAtomType } from '@/types/movieTypes';

const defaultData: MovieAtomType = {
  keyword: '',
  page: 0,
  isScrollEnd: false,
  isLoading: false,
  movieList: [],
  movieDetail: null,
  movieInfo: null,
};

export const movieAtom = atom<MovieAtomType>({
  key: 'movieState',
  default: defaultData,
});
