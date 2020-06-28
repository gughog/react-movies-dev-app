import axios from 'axios';

/**
 * Service layer for axios, which contains a service for
 * get movies, with predefined path.
 *
 * Usage:
 *
 * Api.get('/:movie_id')
 * Api.get('/upcoming?language=en-US&page=1')
 */
const Api = axios.create({
  baseURL: process.env.REACT_APP_MOVIE_BASE_URL,
});

export default Api;
