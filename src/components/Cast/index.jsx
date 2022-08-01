import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/api';
import styles from './';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => setCastList(data.cast));
  }, [movieId]);

  return (
    <div>
      <ul className={styles.cast_list}>
        {castList.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
              }
              alt="title"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
