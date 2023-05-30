import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/tmdb-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsData(movieId);
  }, [movieId]);

  const getReviewsData = async id => {
    const reviewsData = await getReviews(id);
    setReviews(reviewsData.results);
    console.log(reviewsData.results);
  };
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
