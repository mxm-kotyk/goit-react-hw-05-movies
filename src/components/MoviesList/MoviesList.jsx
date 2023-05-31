import { PropTypes } from 'prop-types';
import { List } from './MoviesList.styled';

const MoviesList = ({ children }) => {
  return <List>{children}</List>;
};

MoviesList.propTypes = {
  children: PropTypes.node,
};

export default MoviesList;
