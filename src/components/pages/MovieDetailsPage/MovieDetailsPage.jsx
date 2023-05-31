import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/tmdb-api';
import {
  BackLink,
  MovieWrapper,
  Poster,
  Text,
  Wrapper,
  PosterPlaceholder,
  StyledLink,
  LinksWrapper,
} from './MovieDetailsPage.styled';
import { MdImageNotSupported } from 'react-icons/md';
import Loader from 'components/loaders/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genresArray, setGenresArray] = useState([]);
  const [countriesArray, setCountriesArray] = useState([]);
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const getMovie = async id => {
    setIsLoading(true);

    try {
      const movieData = await getMovieById(id);
      setMovie(movieData);
      setGenresArray(movieData.genres);
      setDate(movieData.release_date);
      setCountriesArray(movieData.production_countries);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { title, poster_path, vote_average, overview, runtime, tagline } =
    movie;
  const goBackHref = location.state ?? '/movies';
  const releaseYear = date.substring(0, 4);
  const userScore = Math.floor(vote_average * 10);
  const genresList = genresArray.map(genre => genre.name).join(', ');
  const countriesList = countriesArray.map(country => country.name).join(', ');
  const poster = poster_path ? (
    <Poster
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={title}
      width="500px"
    />
  ) : (
    <PosterPlaceholder>
      <MdImageNotSupported size="4rem" /> Sorry, we don't have poster for this
      movie
    </PosterPlaceholder>
  );
  const loadingIndicator = isLoading && <Loader />;
  const errorMessage = error && (
    <h2>
      Ooops, something went wrong... Server says: "{error}". Try reloading the
      page.
    </h2>
  );

  return (
    <Wrapper>
      <BackLink to={goBackHref}>Go Back</BackLink>
      {loadingIndicator}
      {errorMessage}
      <MovieWrapper>
        {poster}
        <div>
          <h1>{`${title} (${releaseYear})`}</h1>
          {tagline !== '' && <p>"{tagline}"</p>}
          <p>
            <Text>User Score: </Text>
            {userScore}%
          </p>
          <p>
            <Text>Duration: </Text>
            {runtime} min.
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresList}</p>
          <h2>Countries</h2>
          <p>{countriesList.length === 0 ? <span>N/A</span> : countriesList}</p>
          <div>
            <h2>Additional information</h2>
            <LinksWrapper>
              <StyledLink to="cast" state={goBackHref}>
                Cast
              </StyledLink>
              <StyledLink to="reviews" state={goBackHref}>
                Reviews
              </StyledLink>
            </LinksWrapper>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </MovieWrapper>
    </Wrapper>
  );
};

export default MovieDetailsPage;
