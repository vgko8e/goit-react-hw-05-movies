import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { Layout } from './Layout';

const HeaderLayout = lazy(() => import('./Layout/index'));
const HomePage = lazy(() => import('../pages/Home/index'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<HeaderLayout />} />
          <Route index element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
