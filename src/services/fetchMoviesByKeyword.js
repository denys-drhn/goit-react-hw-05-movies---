import axios from 'axios';

const API_KEY = 'a4c701b3a41d7d3c7de995b9f81d852d';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMoviesByKeyword = async keyword => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: keyword,
        page: 1,
        include_adult: false,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export default fetchMoviesByKeyword;
