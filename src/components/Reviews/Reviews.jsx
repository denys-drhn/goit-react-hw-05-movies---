import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieReviews from '../../services/fetchMovieReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
};

export default Reviews;
