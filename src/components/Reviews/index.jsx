import PropTypes from 'prop-types';
import { getMovieReviews } from '../../service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReview(data.results));
  }, [movieId]);

  return (
    <div>
      {review &&
        (review.length > 0 ? (
          <ul>
            {review.map(({ id, author, content }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p> {content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont have any review for this movie</p>
        ))}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
