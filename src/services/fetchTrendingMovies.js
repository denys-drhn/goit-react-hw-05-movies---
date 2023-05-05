import axios from 'axios';

const API_KEY = 'a4c701b3a41d7d3c7de995b9f81d852d';
const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day',
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchTrendingMovies;
