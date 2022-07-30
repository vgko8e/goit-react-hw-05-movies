import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HeaderLayout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <div>
      <HeaderLayout />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
