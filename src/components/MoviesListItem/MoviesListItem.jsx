import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MoviesListItem = ({ movie: { id, title } }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default MoviesListItem;
