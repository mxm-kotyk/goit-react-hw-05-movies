import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/tmdb-api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  const getMovieCast = async id => {
    const credits = await getCredits(id);
    console.log(credits.cast);
    setCast(credits.cast);
  };

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt="name"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
