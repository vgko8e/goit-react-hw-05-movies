import { searchMovies } from '../../service/api';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Movies.module.css';
import Searchbar from '../../components/Search';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSubmit = searchQuery =>
    searchMovies(searchQuery).then(data => setMovies(data.results));

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <>
          <ul className={styles.movies_list}>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Movies;
