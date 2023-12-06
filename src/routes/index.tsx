import { lazy } from 'react';

import ErrorElement from '@/components/common/ErrorElement';
import Layout from '@/pages/_layout';

const MovieListSection = lazy(() => import('../components/movie/movieList/MovieListSection'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [{ index: true, element: <MovieListSection /> }],
  },
];
