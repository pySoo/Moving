import { ReactNode, useEffect } from 'react';

import { ModalType } from '@/types/modalTypes';

import CloseIcon from '../../icons/CloseIcon';
import { bodyScroll } from './scroll';
import styles from './styles.module.scss';

interface BaseModalProps extends React.ComponentProps<'div'> {
  type: ModalType;
  children: ReactNode;
  onClose: ({ type }: { type: ModalType }) => void;
}

export default function BaseModal({ type, children, onClose }: BaseModalProps) {
  const handleModalClose = () => {
    onClose({ type });
  };

  useEffect(() => {
    bodyScroll.disable();
    return () => {
      bodyScroll.enable();
    };
  }, []);

  return (
    <div role="dialog" className={styles.baseModal}>
      <div className={styles.overlay} onClick={handleModalClose} />
      <div className={styles.wrapper}>
        <button aria-label="modal-close-btn" className={styles.closeBtn} onClick={handleModalClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}
