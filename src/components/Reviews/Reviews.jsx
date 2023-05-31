import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/tmdb-api';
import { List, ListItem, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsData(movieId);
  }, [movieId]);

  const getReviewsData = async id => {
    try {
      const reviewsData = await getReviews(id);
      setReviews(reviewsData.results);
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
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <List>
          {reviews.map(({ author, content, id }) => (
            <ListItem key={id}>
              <p>
                Author: <Text>{author}</Text>
              </p>
              <p>"{content}"</p>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

Reviews.propTypes = {
  author: PropTypes.string,
  id: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
