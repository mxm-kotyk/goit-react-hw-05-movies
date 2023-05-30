import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/tmdb-api';

const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getTrendingMovies();
      setTrending(data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trending.map(movie => (
          <MoviesListItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
