import MoviesListItem from 'components/MoviesListItem/MoviesListItem';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { getMoviesBySearch } from 'services/tmdb-api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    getMovies(query);
  }, [query]);

  const handleSubmit = value => {
    setQuery(value);
  };

  const getMovies = async query => {
    const data = await getMoviesBySearch(query);
    setMovies(data.results);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <h2>Showing results for "{`${query}`}"</h2>
      <ul>
        {movies.map(movie => (
          <MoviesListItem movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
