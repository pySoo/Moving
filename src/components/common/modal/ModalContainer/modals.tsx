import { ReactElement } from 'react';

import { ModalType } from '@/types/modalTypes';

import MovieModal from '../MovieModal';

export const MODAL_COMPONENTS: { [key in ModalType]: () => ReactElement | null } = {
  [ModalType.MOVIE_DETAIL]: MovieModal,
};
