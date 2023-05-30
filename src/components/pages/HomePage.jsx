import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/tmdb-api';

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  console.log(trending);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getTrendingMovies();
      setTrending(data.results);
      console.log(Date.now());
    };
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
