import { PropTypes } from 'prop-types';
import { MdImageNotSupported } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import {
  CardWrapper,
  InfoList,
  InfoText,
  InfoWrapper,
  Poster,
  PosterPlaceholder,
  StyledLink,
  Title,
} from './MoviesListItem.styled';

const MoviesListItem = ({
  movie: { id, title, poster_path, vote_average, release_date },
}) => {
  const location = useLocation();
  const poster = poster_path ? (
    <Poster src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title} />
  ) : (
    <PosterPlaceholder>
      <MdImageNotSupported size="4rem" /> Sorry, we don't have poster for this
      movie
    </PosterPlaceholder>
  );

  return (
    <li>
      <StyledLink to={`/movies/${id}`} state={location}>
        <CardWrapper>
          {poster}
          <InfoWrapper>
            <Title>{title}</Title>

            <InfoList>
              <li>
                <InfoText>Rating: {vote_average.toFixed(1)}/10</InfoText>
              </li>
              <li>
                <InfoText>
                  Release year: {release_date.substring(0, 4)}
                </InfoText>
              </li>
            </InfoList>
          </InfoWrapper>
        </CardWrapper>
      </StyledLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default MoviesListItem;
