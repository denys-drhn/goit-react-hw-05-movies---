import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovieDetails from 'services/fetchMovieDetails';
import css from './MovieDetails.module.css';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation(); // для кноаки назад
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies'); // для кноаки назад

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  // пока идет запрос
  if (!movie) {
    return <p>Loading...</p>;
  }

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
  const releaseDate = movie.release_date;
  const year = releaseDate.slice(0, 4);

  return (
    <div className={css.container}>
      <button className={css.button}>
        {/*кнопка назад + Elvis */}
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </button>
      <div className={css.content}>
        <img
          src={IMAGES_BASE_URL + movie.poster_path}
          alt={movie.title}
          className={css.image}
        />
        <div className={css.info}>
          <h1>
            {movie.original_title}({year})
          </h1>
          <p>User Score : {Math.round(movie.vote_average * 10)}%</p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.additional}>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Revievs</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
