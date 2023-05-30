import { Link, useLocation } from 'react-router-dom';

const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  console.log(location);

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={location}>
        {movie.title}
      </Link>
    </li>
  );
};

export default MoviesListItem;
