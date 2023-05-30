import axios from 'axios';

const API_KEY = 'a57930fa8e3f4bde22e6ba98cb5f89d0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');

  console.log(response.data);
  return response.data;
};

// const api = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTc5MzBmYThlM2Y0YmRlMjJlNmJhOThjYjVmODlkMCIsInN1YiI6IjY0NzI1MDU3OTQwOGVjMDBjMjhlODEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2t5J7zlB3108aQWGj14IyL24scGk6ECOKuBBZUd14uk',
//   },
// });

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTc5MzBmYThlM2Y0YmRlMjJlNmJhOThjYjVmODlkMCIsInN1YiI6IjY0NzI1MDU3OTQwOGVjMDBjMjhlODEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2t5J7zlB3108aQWGj14IyL24scGk6ECOKuBBZUd14uk',
//   },
// };
