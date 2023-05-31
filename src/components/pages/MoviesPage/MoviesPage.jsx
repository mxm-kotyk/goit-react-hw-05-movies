import MoviesList from 'components/MoviesList/MoviesList';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/tmdb-api';
import { Wrapper } from './MoviesPage.styled';
import Loader from 'components/loaders/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    getMovies(query);
  }, [query]);

  const handleSubmit = value => {
    if (value !== query) setMovies([]);

    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: value });
  };

  const getMovies = async query => {
    setIsLoading(true);

    try {
      const data = await getMoviesBySearch(query);
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadingIndicator = isLoading && <Loader />;
  const errorMessage = error && (
    <h2>
      Ooops, something went wrong... Server says: "{error}". Try reloading the
      page.
    </h2>
  );
  const noResultsMessage = movies.length === 0 &&
    query !== '' &&
    !isLoading &&
    !error && (
      <h2>Sorry, there are no images matching "{query}". Please try again.</h2>
    );
  const resultsMessage = query && <h2>Showing results for "{`${query}`}"</h2>;

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit} />
      {loadingIndicator}
      {resultsMessage}
      {noResultsMessage}
      {errorMessage}
      <MoviesList>
        {movies.map(movie => (
          <MoviesListItem movie={movie} key={movie.id} />
        ))}
      </MoviesList>
    </Wrapper>
  );
};

export default MoviesPage;
