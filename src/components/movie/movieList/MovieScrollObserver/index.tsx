import { useRecoilValue } from 'recoil';

import { movieAtom } from '@/atoms/movie';
import LoadSpinner from '@/components/common/LoadSpinner';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import styles from './styles.module.scss';

interface MovieScrollObserverProps {
  onFetchData: () => void;
}
export default function MovieScrollObserver({ onFetchData }: MovieScrollObserverProps) {
  const { isLoading, isScrollEnd, page } = useRecoilValue(movieAtom);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (!isIntersecting) return;

    if (page > 0) {
      onFetchData();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect, options: { threshold: 0.2 } });

  return (
    <div ref={setTarget} className={styles.scrollObserver}>
      <div className={styles.loadSpinnerWrapper}>
        {page > 1 && !isScrollEnd && isLoading && <LoadSpinner />}
      </div>
    </div>
  );
}
