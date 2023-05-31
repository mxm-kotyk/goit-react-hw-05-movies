import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/tmdb-api';
import {
  CardWrapper,
  Foto,
  FotoPlaceholder,
  InfoWrapper,
  List,
  Text,
} from './Cast.styled';
import { MdImageNotSupported } from 'react-icons/md';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  const getMovieCast = async id => {
    try {
      const credits = await getCredits(id);
      setCast(credits.cast);
    } catch (error) {
      setError(error.message);
    }
  };

  const errorMessage = error && (
    <h2>
      Ooops, something went wrong... Server says: "{error}". Try reloading the
      page.
    </h2>
  );

  return (
    <div>
      {errorMessage}
      <h3>Cast</h3>
      {cast.length === 0 ? (
        <p>We don't have any information about cast for this movie</p>
      ) : (
        <List>
          {cast.map(({ id, profile_path, name, character }) => (
            <CardWrapper key={id}>
              {profile_path ? (
                <Foto
                  src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                  alt={name}
                />
              ) : (
                <FotoPlaceholder>
                  <MdImageNotSupported size="4rem" />
                </FotoPlaceholder>
              )}
              <InfoWrapper>
                <Text>{name}</Text>
                <p>Character: {character}</p>
              </InfoWrapper>
            </CardWrapper>
          ))}
        </List>
      )}
    </div>
  );
};

Cast.propTypes = {
  id: PropTypes.string,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default Cast;
