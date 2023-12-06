import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';

import { modalAtom } from '@/atoms/modal';
import { useModal } from '@/hooks/useModal';
import { ModalStateType } from '@/types/modalTypes';

import BaseModal from '../BaseModal';
import { MODAL_COMPONENTS } from './modals';

export default function ModalContainer() {
  const modalList = useRecoilValue(modalAtom);

  const { closeModal } = useModal();

  if (!modalList.length) {
    return null;
  }

  const modalContainer = document.getElementById('modal') as HTMLElement;

  const renderModal = modalList.map(({ type, props }: ModalStateType) => {
    const ModalComponent = MODAL_COMPONENTS[type];
    return (
      <BaseModal key={type} type={type} onClose={closeModal} {...props}>
        <ModalComponent />
      </BaseModal>
    );
  });

  return ReactDOM.createPortal(<>{renderModal}</>, modalContainer);
}
