import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

import { movieAtom } from '@/atoms/movie';
import SearchForm from '@/components/search/SearchForm';

import styles from './styles.module.scss';

export default function Header() {
  const navigate = useNavigate();
  const resetMovieState = useResetRecoilState(movieAtom);

  function navigateToMain() {
    navigate('/');
    resetMovieState();
  }

  return (
    <div>
      <header className={styles.mainHeader}>
        <div className={styles.headerInner}>
          <span className={styles.title} onClick={navigateToMain}>
            Moving
          </span>
          <SearchForm />
        </div>
      </header>
    </div>
  );
}
