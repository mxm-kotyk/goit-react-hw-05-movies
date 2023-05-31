import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/tmdb-api';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [genresArray, setGenresArray] = useState([]);
  const [date, setDate] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  const goBackHref = location.state ?? '/movies';

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const getMovie = async id => {
    const movieData = await getMovieById(id);
    setMovie(movieData);
    setGenresArray(movieData.genres);
    setDate(movieData.release_date);
  };

  const { title, poster_path, vote_average, overview } = movie;
  const releaseYear = date.substring(0, 4);
  const userScore = Math.floor(vote_average * 10);
  const genresList = genresArray.map(genre => genre.name).join(', ');

  return (
    <div>
      <Link to={goBackHref}>Go Back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div>
          <h1>{`${title} (${releaseYear})`}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresList}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <Link to="cast" state={goBackHref}>
          Cast
        </Link>
        <Link to="reviews" state={goBackHref}>
          Reviews
        </Link>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
