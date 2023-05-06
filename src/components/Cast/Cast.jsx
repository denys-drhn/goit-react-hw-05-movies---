import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieCredits from '../../services/fetchMovieCredits';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      const movieCast = await fetchMovieCredits(movieId);
      setCast(movieCast);
    };

    getMovieCast();
  }, [movieId]);

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <div>
      <ul>
        {cast.slice(0, 6).map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={IMAGES_BASE_URL + profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
