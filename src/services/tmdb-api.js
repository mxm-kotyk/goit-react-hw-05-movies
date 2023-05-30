import axios from 'axios';

const API_KEY = 'a57930fa8e3f4bde22e6ba98cb5f89d0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const getMoviesBySearch = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};

export const getCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};
