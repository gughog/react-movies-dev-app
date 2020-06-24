import axios from 'axios';

/**
 * Service layer for axios, which contains a service for
 * get images and movies, with predefined params.
 *
 * Usage:
 *
 * Api.Image.get('/original/:image_path')
 * Api.Movie.get('/:movie_id')
 * Api.Movie.get('/upcoming?language=en-US&page=1')
 */
const Api = {
  Image: axios.create({
    baseURL: process.env.REACT_APP_IMAGE_BASE_URL,
  }),
  Movie: axios.create({
    baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
  }),
};

export default Api;
