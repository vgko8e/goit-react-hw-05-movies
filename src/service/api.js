import axios from 'axios';

const API_KEY = '90fc78e66cc89a0a00dfef80ac9f3880';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&page=1&language=en-US`
  );
  console.log(response.data);
  return response.data;
};

export const getMovieDetails = async movie_id => {
  const response = await axios.get(
    `movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCast = async cast_id => {
  const response = await axios.get(
    `movie/${cast_id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async review_id => {
  const response = await axios.get(
    `movie/${review_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
