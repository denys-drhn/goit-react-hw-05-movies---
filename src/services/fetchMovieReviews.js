import axios from 'axios';

const API_KEY = 'a4c701b3a41d7d3c7de995b9f81d852d';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    const { results } = response.data;
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMovieReviews;
