import MoviesList from 'components/MoviesList/MoviesList';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/tmdb-api';
import { Wrapper } from './HomePage.styled';
import Loader from 'components/loaders/Loader';

const HomePage = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      try {
        const data = await getTrendingMovies();
        setTrending(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  const loadingIndicator = isLoading && <Loader />;
  const errorMessage = error && (
    <h2>
      Ooops, something went wrong... Server says: "{error}". Try reloading the
      page.
    </h2>
  );

  return (
    <Wrapper>
      <h1>Trending Today</h1>
      {loadingIndicator}
      {errorMessage}
      <MoviesList>
        {trending.map(movie => (
          <MoviesListItem movie={movie} key={movie.id} />
        ))}
      </MoviesList>
    </Wrapper>
  );
};

export default HomePage;
