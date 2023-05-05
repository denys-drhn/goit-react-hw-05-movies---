import axios from 'axios';

const API_KEY = 'a4c701b3a41d7d3c7de995b9f81d852d';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const { cast } = response.data;
    return cast;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMovieCredits;
