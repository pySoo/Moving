import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { movieAtom } from '@/atoms/movie';

import styles from './styles.module.scss';

export default function ErrorElement() {
  const navigate = useNavigate();
  const resetMovieState = useResetRecoilState(movieAtom);

  const navigateToMain = () => {
    navigate('/');
    resetMovieState();
  };

  return (
    <div className={styles.errorElement}>
      <p>에러가 발생했습니다.</p>
      <button onClick={navigateToMain}>홈으로 돌아가기</button>
    </div>
  );
}
