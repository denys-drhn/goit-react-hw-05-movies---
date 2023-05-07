import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchMoviesByKeyword from 'services/fetchMoviesByKeyword';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchMoviesByKeyword(query);
      setMovies(moviesData);
    };
    if (query === '') {
      return;
    }
    fetchMovies();
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
    //  setMovies([]);
  };

  return (
    <div>
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
      </div>

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            {/* {добавляю State} */}
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
