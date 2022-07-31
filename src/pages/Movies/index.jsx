import { searchMovies } from '../../service/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Movies.module.css';
import Searchbar from '../../components/Search';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location?.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
      searchMovies(location.state.searchQuery).then(data =>
        setMovies(data.results)
      );
    }
  }, [location?.state?.searchQuery]);

  const handleSubmit = query => {
    setSearchQuery(query);
    searchMovies(query).then(data => setMovies(data.results));
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <>
          <ul className={styles.movies_list}>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link
                    to={`/movies/${movie.id}`}
                    state={{ from: location, searchQuery: searchQuery }}
                  >
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
