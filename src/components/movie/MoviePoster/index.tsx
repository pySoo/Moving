import styles from './styles.module.scss';

interface MoviePosterProps {
  src: string;
}

export default function MoviePoster({ src }: MoviePosterProps) {
  const defaultPoster = 'https://www.bahmansport.com/media/com_store/images/empty.png';
  return (
    <div className={styles.moviePosterWrapper}>
      <img
        src={src === 'N/A' ? defaultPoster : src}
        className={styles.moviePoster}
        alt="movie poster"
      />
    </div>
  );
}
