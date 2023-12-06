import ErrorElement from '@/components/common/ErrorElement';
import MovieListSection from '@/components/movie/movieList/MovieListSection';
import Layout from '@/pages/_layout';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [{ index: true, element: <MovieListSection /> }],
  },
];
