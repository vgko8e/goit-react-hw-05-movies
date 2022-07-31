import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HeaderLayout = lazy(() => import('./components/Layout'));
const HomePage = lazy(() => import('./pages/Home'));
const MoviesPage = lazy(() => import('./pages/Movies'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetails'));
const CastPage = lazy(() => import('./components/Cast'));
const ReviewsPage = lazy(() => import('./components/Reviews'));

export const App = () => {
  return (
    <div>
      <HeaderLayout />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
