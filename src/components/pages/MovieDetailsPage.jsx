import { Link, Outlet } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <>
      <div>MovieDetailsPage</div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
