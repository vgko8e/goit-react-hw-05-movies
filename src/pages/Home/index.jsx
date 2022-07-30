import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../service/api';
import styles from '../Home/Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div className={styles.home_header}>
      <h2 className={styles.movie_title}>Trending today</h2>
      <ul className={styles.movie_list}>
        {trendingMovies &&
          trendingMovies.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
