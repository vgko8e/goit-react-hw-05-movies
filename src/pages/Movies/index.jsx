import { searchMovies } from '../../service/api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Movies.module.css';
import Searchbar from '../../components/Search';
import { Notify } from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      searchMovies(query).then(data => {
        if (!data.total_results) {
          Notify.failure('Sorry, no results matching your request', {
            clickToClose: true,
          });
          throw new Error();
        }
        setMovies(data.results);
      });
    }
  }, [searchParams]);

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

// import { searchMovies } from '../../service/api';
// import { useState, useEffect } from 'react';
// import { useSearchParams, Link, useLocation } from 'react-router-dom';
// import styles from './Movies.module.css';
// import Searchbar from '../../components/Search';
// import { Notify } from 'notiflix';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSubmit = query => {
//     setSearchParams({ query: query });
//   };

//   useEffect(() => {
//     const query = searchParams.get('query');

//     if (query) {
//       searchMovies(query).then(data => {
//         if (!data.total_results) {
//           Notify.failure('Sorry, no results matching your request', {
//             clickToClose: true,
//           });
//           throw new Error();
//         }
//         setMovies(data.results);
//       });
//     }
//   }, [searchParams]);

//   return (
//     <div>
//       <Searchbar onSubmit={handleSubmit} />
//       {movies.length > 0 && (
//         <ul className={styles.movies_list}>
//           {movies.map(movie => {
//             return (
//               <li key={movie.id}>
//                 <Link
//                   to={`/movies/${movie.id}`}
//                   state={{ from: location, searchQuery: location }}
//                 >
//                   {movie.title}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Movies;
