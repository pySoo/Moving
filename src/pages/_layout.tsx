import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import ErrorFallback from '@/components/common/ErrorFallback';
import Header from '@/components/common/Header';
import LoadSpinner from '@/components/common/LoadSpinner';
import ModalContainer from '@/components/common/modal/ModalContainer';

export default function Layout() {
  return (
    <>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadSpinner />}>
          <Outlet />
          <ModalContainer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
