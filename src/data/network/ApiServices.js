import axios from 'axios';

const BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjE2MTAxZDQ2NmNkYzBiM2QwMzE0YzI4ZGZiNDIwYiIsInN1YiI6IjYwNzJhNDg5OGRkYzM0MDA3OThhODYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vZMpCuN5kxlw4636OuXc5NKZ8S5oMkcWva8fpxRZ5nE';
const API_KEY = '5b16101d466cdc0b3d0314c28dfb420b';
// const BEARER_TOKEN = `Bearer ${API_KEY}`;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const CONFIG = {
  params: {
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization: BEARER_TOKEN,
  },
};

// Function to fetch popular movies from TMDb API
export const getPopularMovies = async () => {
  return (await axios.get(`${BASE_URL}/discover/movie`, CONFIG)).data.results;
};

export const getUpcomingMovies = async () => {
  return (await axios.get(`${BASE_URL}/movie/upcoming`, CONFIG)).data.results;
};

export const getPopularTv = async () => {
  return (await axios.get(`${BASE_URL}/tv/popular`, CONFIG)).data.results;
};
