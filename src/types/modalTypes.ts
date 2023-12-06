export type ModalStateType = {
  type: ModalType;
  props?: React.ComponentProps<'div'>;
};

export type ModalDispatchType = {
  openModal: ({ type, props }: ModalStateType) => void;
  closeModal: ({ type }: ModalStateType) => void;
};

export enum ModalType {
  MOVIE_DETAIL = 'MOVIE_DETAIL',
}
