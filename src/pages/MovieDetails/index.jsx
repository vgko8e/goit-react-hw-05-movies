import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../service/api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const [genres, setGenres] = useState('');
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data.data);
      setGenres(() => data.data.genres.map(genre => genre.name).join(' '));
    });
  }, [movieId]);

  const { original_title, overview, poster_path, vote_average } = movie;

  return (
    <div>
      <Link to={location?.state?.from ?? '/'}>
        <button type="button" className={styles.button}>
          Go back
        </button>
      </Link>

      <div className={styles.container}>
        <img
          className={styles.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
          }
          alt={movie.title}
          width="300"
          height="450"
        />

        <div className={styles.box}>
          <h2>{original_title}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
