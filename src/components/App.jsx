import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
