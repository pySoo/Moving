import { atom } from 'recoil';

import { ModalStateType } from '@/types/modalTypes';

export const modalAtom = atom<ModalStateType[]>({
  key: 'modalState',
  default: [],
});
