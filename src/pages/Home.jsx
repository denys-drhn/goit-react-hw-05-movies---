import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchTrendingMovies from '../services/fetchTrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      // console.log(data);
      setMovies(data.results);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
